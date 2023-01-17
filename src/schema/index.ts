import {
  generateAllCrud,
  generateAllObjects,
  generateAllQueries,
  generateAllMutations,
} from "./__generated__/autocrud";
import { builder } from "./builder";

import { findFirstCommentQueryObject } from "./__generated__/Comment/";
import { pubsub } from "@/pubsub";

// export const findFirstOrderTest = builder.queryFields((t) => {
//   const field = findFirstCommentQueryObject(t);
//   return {
//     findFirstOrderTest: t.prismaField({
//       ...field,
//       args: {
//         testParam: t.arg({ type: "String", required: false }),
//       },
//       resolve: async (...args) => {
//         const [include, root, { testParam }, { db }, info] = args;
//         if (testParam === "123") throw new Error("Invalid");
//         return field.resolve(...args);
//       },
//       smartSubscription: true,
//       subscribe: (subscriptions) => subscriptions.register(`DATABASE-UPDATED-${field.type}`),
//       // unsubscribe: (subscriptions) => subscriptions.unregister(`DATABASE-UPDATED-${field.type}`)
//     }),
//   };
// });

builder.queryFields((t) => ({
  polls: t.field({
    type: "String",
    smartSubscription: true,
    subscribe: (subscriptions, root, args, ctx, info) => {
      console.log({ subscriptions, ctx })
      subscriptions.register('poll-added')
      subscriptions.register('poll-delted')
    },
    resolve: (root, args, ctx, info) => {
      return "ata"
    },
  }),
}))

generateAllObjects();
// generateAllQueries({ exclude: ['Post'] });
// generateAllMutations({ exclude: ['Post'] });

pubsub.subscribe("ata", (message) => console.log({ message }))

const iterated = async () => {
  const a = pubsub.asyncIterator("ata")
  const c = await a.next()
  console.log({ c })
  const d = await a.next()
  console.log({ d })
}

iterated()

builder.queryType({
  fields: (t) => ({
    health: t.field({
      type: "String",
      resolve: () => {
        pubsub.publish("ata", "123");
        return "Ok";
      },
    }),
  }),
});
builder.mutationType({
  fields: (t) => ({
    health: t.field({
      type: "String",
      resolve: () => "Ok",
    }),
  }),
});
builder.subscriptionType({});

export const schema = builder.toSchema({});
