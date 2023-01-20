import { builder } from "../builder";
import { getResolverName } from "../fsRouter";
import { findFirstUserQueryObject } from "../__generated__/User";

export default builder.queryField(getResolverName(), (t) => t.prismaField((() => {
  const object = findFirstUserQueryObject(t)
  return {
    ...object,
    args: {
      testParam: t.arg({ type: "String", required: false }),
    },
    type: "User",
  }
})()))
