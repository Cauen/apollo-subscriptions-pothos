import { Prisma } from '.prisma/client';
import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import { prisma } from '../db';
import PrismaTypes from '../generated/objects';
import SmartSubscriptionsPlugin, { subscribeOptionsFromIterator } from '@pothos/plugin-smart-subscriptions';
import { Scalars } from 'prisma-generator-pothos-codegen';
import { Context, pubsub } from '@/context';

export const builder = new SchemaBuilder<{
  Context: Context,
  PrismaTypes: PrismaTypes,
  Scalars: Scalars<Prisma.Decimal, Prisma.InputJsonValue | null, Prisma.InputJsonValue>,
  smartSubscriptions: {
    debounceDelay: number | null;
    subscribe: (
      name: string,
      context: Context,
      cb: (err: unknown, data?: unknown) => void,
    ) => Promise<void> | void;
    unsubscribe: (name: string, context: Context) => Promise<void> | void;
  },
}>({
  plugins: [PrismaPlugin, SmartSubscriptionsPlugin],
  prisma: {
    client: prisma,
  },
  smartSubscriptions: {
    ...subscribeOptionsFromIterator((name, context) => {
      return pubsub.asyncIterator(name);
    })
  },
});
