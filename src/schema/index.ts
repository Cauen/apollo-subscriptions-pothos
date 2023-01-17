import { builder } from "./builder";

import { pubsub } from "@/context";

let currentNumber = 0;
function incrementNumber() {
  currentNumber++;
  pubsub.publish("NUMBER_INCREMENTED", { numberIncremented: currentNumber });
  setTimeout(incrementNumber, 1000);
}

incrementNumber();

builder.queryFields((t) => ({
  numberIncremented: t.field({
    type: "Int",
    smartSubscription: true,
    subscribe: (subscriptions, root, args, ctx, info) => {
      subscriptions.register('NUMBER_INCREMENTED')
    },
    resolve: (root, args, ctx, info) => {
      return currentNumber
    },
  }),
}))

builder.queryType({
  fields: (t) => ({
    currentNumber: t.field({
      type: "Int",
      resolve: (parent, args, ctx) => {
        return currentNumber;
      },
    }),
  }),
});

builder.subscriptionType({
  fields: (t) => ({
    iterNumber: t.int({
      resolve: (parent) => parent,
      subscribe: () => {
        const iter = {
          next: () =>
            new Promise<IteratorResult<number, never>>((resolve) => {
              setTimeout(() => {
                resolve({
                  value: currentNumber,
                  done: false,
                });
              }, 1000);
            }),
        };

        return { [Symbol.asyncIterator]: () => iter };
      },
    }),
  }),
});

export const schema = builder.toSchema({});
