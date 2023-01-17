import { ApolloServer } from 'apollo-server'
import { schema } from './schema'
import { createContext } from './context'

const server = new ApolloServer({
  schema,
  introspection: true, // TODO: protect this
  context: createContext,
  cors: {
    origin: "*",
    credentials: true,
  },
})

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});

console.log(`🚀 Starting server`)
server.listen(process.env.PORT || 4020).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}graphql`)
})
