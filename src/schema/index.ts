import {
  generateAllCrud,
  generateAllObjects,
  generateAllQueries,
  generateAllMutations,
} from './__generated__/autocrud';
import { builder } from './builder';


import { findFirstCommentQueryObject } from './__generated__/Comment/';

export const findFirstOrderTest = builder.queryFields((t) => {
  const field = findFirstCommentQueryObject(t);
  return {
    findFirstOrderTest: t.prismaField({
      ...field,
      args: {
        testParam: t.arg({ type: "String", required: false }),
      },
      resolve: async (...args) => {
        const [include, root, { testParam }, { response, prisma }, info] = args;
        if (testParam === "123") throw new Error("Invalid");
        return field.resolve(...args);
      },
      smartSubscription: true, 
      subscribe: (subscriptions) => subscriptions.register(`DATABASE-UPDATED-${field.type}`),
      // unsubscribe: (subscriptions) => subscriptions.unregister(`DATABASE-UPDATED-${field.type}`)
    }),
  };
});

generateAllObjects();
generateAllQueries({ exclude: ['Post'] });
generateAllMutations({ exclude: ['Post'] });


builder.queryType({});
builder.mutationType({});
builder.subscriptionType({});

export const schema = builder.toSchema({});
