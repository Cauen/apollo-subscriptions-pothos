import { PrismaClient } from '@prisma/client'
import { pubsub } from './context'

export const prisma = new PrismaClient({
  // log: ['error', 'info', 'query', 'warn'],
})

prisma.$use(async (params, next) => {
  const { action, args, dataPath, model } = params
  
  const result = await next(params)
  if (
    params.action === 'create' ||
    params.action === 'update' ||
    params.action === 'delete' ||
    params.action === 'deleteMany' ||
    params.action === 'updateMany' ||
    params.action === 'createMany'
  ) {
    console.log(`🚀 ${params.action} ${params.model}`)
    pubsub.publish('database-updated-'+model, {})
  }
  // See results here
  return result
})
