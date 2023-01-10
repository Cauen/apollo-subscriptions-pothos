import { PrismaClient } from '@prisma/client';

import { PubSub } from 'graphql-subscriptions';
export const pubsub = new PubSub();

export const db = new PrismaClient({
  // log: ['error', 'info', 'query', 'warn'],
});

db.$use(async (params, next) => {
  console.log('prisma middleware.', pubsub);
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
    pubsub.publish('DATABASE-UPDATED-'+model, result)
  }
  // See results here
  return result
})
