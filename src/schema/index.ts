import {
  generateAllObjects,
} from "./__generated__/autocrud";
import { builder } from "./builder";

import { countExtraModalQueryObject, createOneExtraModalMutation } from "./__generated__/ExtraModal";

generateAllObjects()
builder.mutationFields(createOneExtraModalMutation)

export const countExtraModalTest = builder.queryFields((t) => {
  const field = countExtraModalQueryObject(t);
  return {
    countExtraModalTest: t.field({
      ...field,
      smartSubscription: true,
      subscribe: (subscriptions) => subscriptions.register(`database-updated-ExtraModal`),
    }),
  };
});

builder.queryType();
builder.mutationType();
builder.subscriptionType();

export const schema = builder.toSchema({});
