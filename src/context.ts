import { Prisma, PrismaClient, User } from '@prisma/client'
import { IncomingMessage, ServerResponse } from 'http'
import { prisma } from './db'
import { PubSub } from 'graphql-subscriptions';

type SelectType = {
  select?: Record<string, string>
}

export interface Context {
  prisma: PrismaClient
  select: SelectType
  user?: User
  request: IncomingMessage
  response: ServerResponse
  pubsub: PubSub
}

export const pubsub = new PubSub();

export async function createContext({ req, res }: { req: IncomingMessage, res: ServerResponse }): Promise<Context> {
  return {
    request: req,
    response: res,
    prisma,
    select: {},
    pubsub,
    user: undefined //await getUserByToken(req),
  }
}
