import {
  generateAllMutations,
  generateAllObjects,
  generateAllQueries,
} from "./__generated__/autocrud";
import { builder } from "./builder";
import { autoImport } from "./fsRouter";

autoImport({
  root: __dirname,
  extensions: [".query.ts", ".mutation.ts", "inputs.ts"],
  ignore: ["__generated__"],
});
generateAllObjects();
generateAllMutations({ exclude: ["User"] });
generateAllQueries({
  handleResolver: ({ field, modelName }) => ({
    ...field,
    smartSubscription: true,
    subscribe: (subscriptions: any) =>
      subscriptions.register(`database-updated-${modelName}`),
  }),
});

builder.queryType();
builder.mutationType();
builder.subscriptionType();

export const schema = builder.toSchema({});
