import {
  generateAllMutations,
  generateAllObjects,
  generateAllQueries,
} from "./__generated__/autocrud";
import { builder } from "./builder";

import { countExtraModalQueryObject, createOneExtraModalMutation } from "./__generated__/ExtraModal";

generateAllObjects()
generateAllMutations()
generateAllQueries({
  handleResolver: ({
    field,
    modelName,
  }) => {
    return {
      ...field,
      smartSubscription: true,
      subscribe: (subscriptions: any) => subscriptions.register(`database-updated-${modelName}`),
    };
  },
})


builder.queryType();
builder.mutationType();
builder.subscriptionType();

export const schema = builder.toSchema({});