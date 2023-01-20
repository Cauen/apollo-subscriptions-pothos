import {
  generateAllMutations,
  generateAllObjects,
  generateAllQueries,
} from "./__generated__/autocrud";
import { builder } from "./builder";
import "./fsRouter"
import { autoImport } from "./fsRouter";

const imported = autoImport({
  root: __dirname,
  extensions: [".query.ts", "mutation.ts", "inputs.ts"],
  ignore: ["__generated__"],
});
// console.log({ imported })

generateAllObjects();
generateAllMutations();
generateAllQueries({
  handleResolver: ({ field, modelName }) => {
    return {
      ...field,
      smartSubscription: true,
      subscribe: (subscriptions: any) =>
        subscriptions.register(`database-updated-${modelName}`),
    };
  },
});

builder.queryType();
builder.mutationType();
builder.subscriptionType();

export const schema = builder.toSchema({});
