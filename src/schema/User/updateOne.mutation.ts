import { builder } from "../builder";
import { getResolverName } from "../fsRouter";
import { updateOneUserMutationObject } from "../__generated__/User";

export default builder.mutationFields((t) => {
  const field = updateOneUserMutationObject(t);
  return {
    [getResolverName()]: t.prismaField({
      ...field,
      args: {
        ...field.args,
        testParam: t.arg({ type: "String", required: false }),
      },
      resolve: async (...args) => {
        const [include, root, { testParam }, { response, db }, info] = args;
        if (testParam === "123") throw new Error("Invalid");
        return field.resolve(...args);
      },
    }),
  };
});
