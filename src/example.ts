import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import express from 'express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';

import { db, pubsub } from './db';
import { schema } from './schema';
import { User } from '@prisma/client';

export type Context = {
  db: typeof db;
  user: User | null;
  pubsub: typeof pubsub;
};

// Create an Express app and HTTP server; we will attach both the WebSocket
// server and the ApolloServer to this HTTP server.
const app = express();
const httpServer = createServer(app);

// Create our WebSocket server using the HTTP server we just set up.
const wsServer = new WebSocketServer({
  server: httpServer,
  path: '/graphql',
});
// Save the returned server's info so we can shutdown this server later
const serverCleanup = useServer({ schema }, wsServer);


let iter = 0;
const context = async ({
  req,
  res,
}: {
  req: Express.Request;
  res: Express.Response;
}): Promise<Context> => {
  const user: User | null = await db.user.findFirst({});
  console.log('context', iter++, user, pubsub); //, req.headers);
  return {
    db,
    user,
    pubsub
  };
};

// Set up ApolloServer.
const server = new ApolloServer({
  schema,
  context,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    // Proper shutdown for the HTTP server.
    ApolloServerPluginDrainHttpServer({ httpServer }),

    // Proper shutdown for the WebSocket server.
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
    // ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
});

(async () => {
    await server.start();
    server.applyMiddleware({ app });

    const PORT = 4000;
    // Now that our HTTP server is fully set up, we can listen to it.
    httpServer.listen(PORT, () => {
    console.log(`Server is now running on http://localhost:${PORT}${server.graphqlPath}`);
    });
})();