import { builder } from "../builder";
import { getResolverName } from "../fsRouter";
import { updateOneUserMutationObject } from "../__generated__/User";

export default builder.mutationFields((t) => {
  return {
    [getResolverName()]: t.field({
      type: "Json",
      args: {
        testParam: t.arg({ type: "String", required: false }),
      },
      resolve: async (...args) => {
        const [root, { testParam }, { response, db }, info] = args;
        if (testParam === "123") throw new Error("Invalid");
        return {};
      },
    }),
  };
});
