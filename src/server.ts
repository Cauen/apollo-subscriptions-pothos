import { User } from '@prisma/client';
// import { ApolloServer } from 'apollo-server';
import { db } from './db';
import { schema } from './schema';

import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';

import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';


import bodyParser from 'body-parser';
import cors, { CorsOptions } from 'cors';

import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();

const path = '/';
const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;
const allowedOrigins =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined
    ? [
        'http://localhost:3000',
        'http://localhost:3001',
        'https://studio.apollographql.com',
      ]
    : ['production client url'];

const corsOptions: CorsOptions = {
  origin: allowedOrigins,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
app.disable('x-powered-by');
const httpServer = createServer(app);

const wsServer = new WebSocketServer({
  server: httpServer,
  path,
});

const serverCleanup = useServer({ schema }, wsServer);

export type Context = {
  db: typeof db;
  user: User | null;
  pubsub: typeof pubsub;
};

let iter = 0;
const context = async ({
  req,
  res,
}: {
  req: Express.Request;
  res: Express.Response;
}): Promise<Context> => {
  const user: User | null = await db.user.findFirst({});
  console.log('context', iter++, user); //, req.headers);
  return {
    db,
    user,
    pubsub
  };
};


// const server = new ApolloServer<Context>({
//   schema,
//   context,
// });
const server = new ApolloServer<Context>({
  schema,
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
  ],
});
// server.listen(3000).then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });


(async () => {
  await server.start();
  app.use(
    path,
    cors<cors.CorsRequest>(corsOptions),
    bodyParser.json(),
    expressMiddleware<Context>(server, { context })
  );

  // Now that our HTTP server is fully set up, actually listen.
  httpServer.listen(PORT, () => {
    console.log(`🚀 Query endpoint ready at http://localhost:${PORT}/graphql`);
    console.log(
      `🚀 Subscription endpoint ready at ws://localhost:${PORT}/graphql`
    );
  });

  // // In the background, increment a number every second and notify subscribers when it changes.
  // function incrementNumber() {
  //   currentNumber++;
  //   pubsub.publish('NUMBER_INCREMENTED', { numberIncremented: currentNumber });
  //   setTimeout(incrementNumber, 1000);
  // }

  // // Start incrementing
  // incrementNumber();
})(); // iife
