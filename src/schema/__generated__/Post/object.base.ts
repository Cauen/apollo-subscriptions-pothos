import * as Inputs from '../inputs';
import {
  defineExposeObject,
  definePrismaObject,
  defineFieldObject,
  defineRelationFunction,
  defineRelationObject,
} from '../utils';

export const PostObject = definePrismaObject('Post', {
  description: undefined,
  findUnique: ({ id }) => ({ id }),
  fields: (t) => ({
    id: t.exposeID('id', PostIdFieldObject),
    slug: t.exposeString('slug', PostSlugFieldObject),
    title: t.exposeString('title', PostTitleFieldObject),
    body: t.exposeString('body', PostBodyFieldObject),
    Author: t.relation('Author', PostAuthorFieldObject),
    authorId: t.exposeString('authorId', PostAuthorIdFieldObject),
  }),
});

export const PostIdFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const PostSlugFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const PostTitleFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const PostBodyFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});

export const PostAuthorFieldObject = defineRelationObject('Post', 'Author', {
  description: undefined,
  nullable: false,
  args: undefined,
  query: undefined,
});

export const PostAuthorIdFieldObject = defineExposeObject('String', {
  description: undefined,
  nullable: false,
});
