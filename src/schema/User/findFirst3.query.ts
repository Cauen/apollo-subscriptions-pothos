import { builder } from "../builder";
import { findFirstUserQueryObject } from "../__generated__/User";

export const findFirstUserTest3 = builder.queryFields((t) => {
  const field = findFirstUserQueryObject(t);
  return {
    findFirstUserTest3: t.prismaField({
      ...field,
      args: {
        testParam: t.arg({ type: "String", required: false }),
      },
      resolve: async (...args) => {
        const [include, root, { testParam }, { response, db }, info] = args;
        return db.user.findFirst({
            where: {
                Address: {
                    is: {
                        city: {
                            contains: testParam || ""
                        }
                    }
                }
            }
        })
      },
    }),
  };
});
