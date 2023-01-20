import * as Inputs from '../inputs';
import {
  defineExposeObject,
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const UserObject = definePrismaObject('User', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID('id', UserIdFieldObject),
    email: t.exposeString('email', UserEmailFieldObject),
    name: t.exposeString('name', UserNameFieldObject),
    Address: t.field(UserAddressFieldObject),
    Posts: t.relation('Posts', UserPostsFieldObject(t)),
  }),
});

export const UserIdFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const UserEmailFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const UserNameFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: true,
});

export const UserAddressFieldObject = defineFieldObject('User', {
  type: "Json", // Mongodb Types not working yet
  description: undefined,
  nullable: true,
  resolve: (parent) => parent.Address,
});

export const UserPostsFieldObject = defineRelationFunction('User', (t) =>
  defineRelationObject('User', 'Posts', {
    description: undefined,
    nullable: false,
    args: {
      where: t.arg({ type: Inputs.PostWhereInput, required: false }),
      orderBy: t.arg({ type: [Inputs.PostOrderByWithRelationInput], required: false }),
      cursor: t.arg({ type: Inputs.PostWhereUniqueInput, required: false }),
      take: t.arg({ type: 'Int', required: false }),
      skip: t.arg({ type: 'Int', required: false }),
      distinct: t.arg({ type: [Inputs.PostScalarFieldEnum], required: false }),
    },
    query: (args) => ({
      where: args.where || undefined,
      cursor: args.cursor || undefined,
      take: args.take || undefined,
      distinct: args.distinct || undefined,
      skip: args.skip || undefined,
      orderBy: args.orderBy || undefined,
    }),
  }),
);
