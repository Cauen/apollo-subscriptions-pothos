// import { ApolloServer } from 'apollo-server-ex'
// import { ApolloServer } from 'apollo-server-express'
import { schema } from './schema'
import { createContext } from './context'
import express, { Express } from 'express'
import * as path from 'path'
import cors from 'cors'
import { execute, subscribe } from 'graphql'
// import { SubscriptionServer } from 'subscriptions-transport-ws'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { createServer, Server } from 'http'
import bodyparser from 'body-parser'
import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { json } from 'body-parser'
import { expressMiddleware } from '@apollo/server/express4'
// import { blingOrderStockCallback } from './schema/ShopOrder/controllers/blingOrderStockCallback'
// import { blingOrderNfeCallback } from './schema/ShopOrder/controllers/blingOrderNfeCallback'

const startedAt = new Date().toISOString()

class AppServer {
  express: Express
  server: Server

  constructor() {
    this.express = express()
    this.server = createServer(this.express)
    this.configs()
    this.middlewares()
    this.routes()
    this.workers()
    this.apollo()
  }

  configs() {
    process.env.TZ = 'UTC'
  }

  middlewares() {
    this.express.use(cors())
    this.express.use(bodyparser.json({ limit: '200mb' })) // enable upload big images at signature upload
  }

  workers() {
    // startCron()
  }

  routes() {
    this.express.get('/', (_, res) =>
      res.send('Backend started at ' + startedAt),
    )
  }

  async apollo() {
    const server = new ApolloServer({
      schema,
      introspection: true, // TODO: protect this
      plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer: this.server }),
      ],
    })

    process.on('uncaughtException', function (err) {
      console.log('Caught exception: ' + err, 'error')
    })

    console.log(`🚀 Starting server`)
    await server.start()
    this.express.use(
      '/graphql',
      cors<cors.CorsRequest>(),
      json(),
      expressMiddleware(server, {
        context: createContext,
      }),
    )
  }
}

export default new AppServer().server
