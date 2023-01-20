import { getResolverName } from "@/schema/fsRouter";
import { builder } from "../../builder";
import { findFirstUserQueryObject } from "../../__generated__/User";

export default builder.queryFields((t) => {
  const field = findFirstUserQueryObject(t);
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
