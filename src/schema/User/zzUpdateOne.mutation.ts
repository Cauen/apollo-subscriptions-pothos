import { builder } from "../builder";
import { getResolverName } from "../fsRouter";
import { updateOneUserMutationObject } from "../__generated__/User";

export default builder.mutationField(
  getResolverName(),
  (t) =>
    t.prismaField((() => {
      const object = updateOneUserMutationObject(t);
      return {
        ...object,
        args: {
          ...object.args,
          testParam: t.arg({ type: "String", required: false }),
        },
      };
    })()),
);
