// @ts-nocheck
import { Prisma } from '.prisma/client';
import { builder } from '../builder';



export const PostScalarFieldEnum = builder.enumType('PostScalarFieldEnum', {
  values: ["id","slug","title","body","authorId"] as const,
});

export const QueryMode = builder.enumType('QueryMode', {
  values: ["default","insensitive"] as const,
});

export const SortOrder = builder.enumType('SortOrder', {
  values: ["asc","desc"] as const,
});

export const UserScalarFieldEnum = builder.enumType('UserScalarFieldEnum', {
  values: ["id","email","name"] as const,
});

export const PostWhereInput = builder.inputRef<Prisma.PostWhereInput>('PostWhereInput').implement({
  fields: (t) => ({
    AND: t.field({"required":false,"type":[PostWhereInput]}),
    OR: t.field({"required":false,"type":[PostWhereInput]}),
    NOT: t.field({"required":false,"type":[PostWhereInput]}),
    id: t.field({"required":false,"type":StringFilter}),
    slug: t.field({"required":false,"type":StringFilter}),
    title: t.field({"required":false,"type":StringFilter}),
    body: t.field({"required":false,"type":StringFilter}),
    Author: t.field({"required":false,"type":UserWhereInput}),
    authorId: t.field({"required":false,"type":StringFilter}),
  }),
});

export const PostOrderByWithRelationInput = builder.inputRef<Prisma.PostOrderByWithRelationInput>('PostOrderByWithRelationInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    slug: t.field({"required":false,"type":SortOrder}),
    title: t.field({"required":false,"type":SortOrder}),
    body: t.field({"required":false,"type":SortOrder}),
    Author: t.field({"required":false,"type":UserOrderByWithRelationInput}),
    authorId: t.field({"required":false,"type":SortOrder}),
  }),
});

export const PostWhereUniqueInput = builder.inputRef<Prisma.PostWhereUniqueInput>('PostWhereUniqueInput').implement({
  fields: (t) => ({
    id: t.string({"required":false}),
    slug: t.string({"required":false}),
  }),
});

export const PostOrderByWithAggregationInput = builder.inputRef<Prisma.PostOrderByWithAggregationInput>('PostOrderByWithAggregationInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    slug: t.field({"required":false,"type":SortOrder}),
    title: t.field({"required":false,"type":SortOrder}),
    body: t.field({"required":false,"type":SortOrder}),
    authorId: t.field({"required":false,"type":SortOrder}),
    _count: t.field({"required":false,"type":PostCountOrderByAggregateInput}),
    _max: t.field({"required":false,"type":PostMaxOrderByAggregateInput}),
    _min: t.field({"required":false,"type":PostMinOrderByAggregateInput}),
  }),
});

export const PostScalarWhereWithAggregatesInput = builder.inputRef<Prisma.PostScalarWhereWithAggregatesInput>('PostScalarWhereWithAggregatesInput').implement({
  fields: (t) => ({
    AND: t.field({"required":false,"type":[PostScalarWhereWithAggregatesInput]}),
    OR: t.field({"required":false,"type":[PostScalarWhereWithAggregatesInput]}),
    NOT: t.field({"required":false,"type":[PostScalarWhereWithAggregatesInput]}),
    id: t.field({"required":false,"type":StringWithAggregatesFilter}),
    slug: t.field({"required":false,"type":StringWithAggregatesFilter}),
    title: t.field({"required":false,"type":StringWithAggregatesFilter}),
    body: t.field({"required":false,"type":StringWithAggregatesFilter}),
    authorId: t.field({"required":false,"type":StringWithAggregatesFilter}),
  }),
});

export const UserWhereInput = builder.inputRef<Prisma.UserWhereInput>('UserWhereInput').implement({
  fields: (t) => ({
    AND: t.field({"required":false,"type":[UserWhereInput]}),
    OR: t.field({"required":false,"type":[UserWhereInput]}),
    NOT: t.field({"required":false,"type":[UserWhereInput]}),
    id: t.field({"required":false,"type":StringFilter}),
    email: t.field({"required":false,"type":StringFilter}),
    name: t.field({"required":false,"type":StringNullableFilter}),
    Address: t.field({"required":false,"type":AddressNullableCompositeFilter}),
    Posts: t.field({"required":false,"type":PostListRelationFilter}),
  }),
});

export const UserOrderByWithRelationInput = builder.inputRef<Prisma.UserOrderByWithRelationInput>('UserOrderByWithRelationInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    email: t.field({"required":false,"type":SortOrder}),
    name: t.field({"required":false,"type":SortOrder}),
    Address: t.field({"required":false,"type":AddressOrderByInput}),
    Posts: t.field({"required":false,"type":PostOrderByRelationAggregateInput}),
  }),
});

export const UserWhereUniqueInput = builder.inputRef<Prisma.UserWhereUniqueInput>('UserWhereUniqueInput').implement({
  fields: (t) => ({
    id: t.string({"required":false}),
    email: t.string({"required":false}),
  }),
});

export const UserOrderByWithAggregationInput = builder.inputRef<Prisma.UserOrderByWithAggregationInput>('UserOrderByWithAggregationInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    email: t.field({"required":false,"type":SortOrder}),
    name: t.field({"required":false,"type":SortOrder}),
    _count: t.field({"required":false,"type":UserCountOrderByAggregateInput}),
    _max: t.field({"required":false,"type":UserMaxOrderByAggregateInput}),
    _min: t.field({"required":false,"type":UserMinOrderByAggregateInput}),
  }),
});

export const UserScalarWhereWithAggregatesInput = builder.inputRef<Prisma.UserScalarWhereWithAggregatesInput>('UserScalarWhereWithAggregatesInput').implement({
  fields: (t) => ({
    AND: t.field({"required":false,"type":[UserScalarWhereWithAggregatesInput]}),
    OR: t.field({"required":false,"type":[UserScalarWhereWithAggregatesInput]}),
    NOT: t.field({"required":false,"type":[UserScalarWhereWithAggregatesInput]}),
    id: t.field({"required":false,"type":StringWithAggregatesFilter}),
    email: t.field({"required":false,"type":StringWithAggregatesFilter}),
    name: t.field({"required":false,"type":StringNullableWithAggregatesFilter}),
  }),
});

export const PostCreateInput = builder.inputRef<Prisma.PostCreateInput>('PostCreateInput').implement({
  fields: (t) => ({
    id: t.string({"required":false}),
    slug: t.string({"required":true}),
    title: t.string({"required":true}),
    body: t.string({"required":true}),
    Author: t.field({"required":true,"type":UserCreateNestedOneWithoutPostsInput}),
  }),
});

export const PostUpdateInput = builder.inputRef<Prisma.PostUpdateInput>('PostUpdateInput').implement({
  fields: (t) => ({
    slug: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
    title: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
    body: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
    Author: t.field({"required":false,"type":UserUpdateOneRequiredWithoutPostsNestedInput}),
  }),
});

export const PostCreateManyInput = builder.inputRef<Prisma.PostCreateManyInput>('PostCreateManyInput').implement({
  fields: (t) => ({
    id: t.string({"required":false}),
    slug: t.string({"required":true}),
    title: t.string({"required":true}),
    body: t.string({"required":true}),
    authorId: t.string({"required":true}),
  }),
});

export const PostUpdateManyMutationInput = builder.inputRef<Prisma.PostUpdateManyMutationInput>('PostUpdateManyMutationInput').implement({
  fields: (t) => ({
    slug: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
    title: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
    body: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  }),
});

export const UserCreateInput = builder.inputRef<Prisma.UserCreateInput>('UserCreateInput').implement({
  fields: (t) => ({
    id: t.string({"required":false}),
    email: t.string({"required":true}),
    name: t.string({"required":false}),
    Address: t.field({"required":false,"type":AddressNullableCreateEnvelopeInput}),
    Posts: t.field({"required":false,"type":PostCreateNestedManyWithoutAuthorInput}),
  }),
});

export const UserUpdateInput = builder.inputRef<Prisma.UserUpdateInput>('UserUpdateInput').implement({
  fields: (t) => ({
    email: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
    name: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
    Address: t.field({"required":false,"type":AddressNullableUpdateEnvelopeInput}),
    Posts: t.field({"required":false,"type":PostUpdateManyWithoutAuthorNestedInput}),
  }),
});

export const UserCreateManyInput = builder.inputRef<Prisma.UserCreateManyInput>('UserCreateManyInput').implement({
  fields: (t) => ({
    id: t.string({"required":false}),
    email: t.string({"required":true}),
    name: t.string({"required":false}),
    Address: t.field({"required":false,"type":AddressNullableCreateEnvelopeInput}),
  }),
});

export const UserUpdateManyMutationInput = builder.inputRef<Prisma.UserUpdateManyMutationInput>('UserUpdateManyMutationInput').implement({
  fields: (t) => ({
    email: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
    name: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
    Address: t.field({"required":false,"type":AddressNullableUpdateEnvelopeInput}),
  }),
});

export const StringFilter = builder.inputRef<Prisma.StringFilter>('StringFilter').implement({
  fields: (t) => ({
    equals: t.string({"required":false}),
    in: t.stringList({"required":false}),
    notIn: t.stringList({"required":false}),
    lt: t.string({"required":false}),
    lte: t.string({"required":false}),
    gt: t.string({"required":false}),
    gte: t.string({"required":false}),
    contains: t.string({"required":false}),
    startsWith: t.string({"required":false}),
    endsWith: t.string({"required":false}),
    mode: t.field({"required":false,"type":QueryMode}),
    not: t.field({"required":false,"type":NestedStringFilter}),
  }),
});

export const UserRelationFilter = builder.inputRef<Prisma.UserRelationFilter>('UserRelationFilter').implement({
  fields: (t) => ({
    is: t.field({"required":false,"type":UserWhereInput}),
    isNot: t.field({"required":false,"type":UserWhereInput}),
  }),
});

export const PostCountOrderByAggregateInput = builder.inputRef<Prisma.PostCountOrderByAggregateInput>('PostCountOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    slug: t.field({"required":false,"type":SortOrder}),
    title: t.field({"required":false,"type":SortOrder}),
    body: t.field({"required":false,"type":SortOrder}),
    authorId: t.field({"required":false,"type":SortOrder}),
  }),
});

export const PostMaxOrderByAggregateInput = builder.inputRef<Prisma.PostMaxOrderByAggregateInput>('PostMaxOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    slug: t.field({"required":false,"type":SortOrder}),
    title: t.field({"required":false,"type":SortOrder}),
    body: t.field({"required":false,"type":SortOrder}),
    authorId: t.field({"required":false,"type":SortOrder}),
  }),
});

export const PostMinOrderByAggregateInput = builder.inputRef<Prisma.PostMinOrderByAggregateInput>('PostMinOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    slug: t.field({"required":false,"type":SortOrder}),
    title: t.field({"required":false,"type":SortOrder}),
    body: t.field({"required":false,"type":SortOrder}),
    authorId: t.field({"required":false,"type":SortOrder}),
  }),
});

export const StringWithAggregatesFilter = builder.inputRef<Prisma.StringWithAggregatesFilter>('StringWithAggregatesFilter').implement({
  fields: (t) => ({
    equals: t.string({"required":false}),
    in: t.stringList({"required":false}),
    notIn: t.stringList({"required":false}),
    lt: t.string({"required":false}),
    lte: t.string({"required":false}),
    gt: t.string({"required":false}),
    gte: t.string({"required":false}),
    contains: t.string({"required":false}),
    startsWith: t.string({"required":false}),
    endsWith: t.string({"required":false}),
    mode: t.field({"required":false,"type":QueryMode}),
    not: t.field({"required":false,"type":NestedStringWithAggregatesFilter}),
    _count: t.field({"required":false,"type":NestedIntFilter}),
    _min: t.field({"required":false,"type":NestedStringFilter}),
    _max: t.field({"required":false,"type":NestedStringFilter}),
  }),
});

export const StringNullableFilter = builder.inputRef<Prisma.StringNullableFilter>('StringNullableFilter').implement({
  fields: (t) => ({
    equals: t.string({"required":false}),
    in: t.stringList({"required":false}),
    notIn: t.stringList({"required":false}),
    lt: t.string({"required":false}),
    lte: t.string({"required":false}),
    gt: t.string({"required":false}),
    gte: t.string({"required":false}),
    contains: t.string({"required":false}),
    startsWith: t.string({"required":false}),
    endsWith: t.string({"required":false}),
    mode: t.field({"required":false,"type":QueryMode}),
    not: t.field({"required":false,"type":NestedStringNullableFilter}),
    isSet: t.boolean({"required":false}),
  }),
});

export const AddressNullableCompositeFilter = builder.inputRef<Prisma.AddressNullableCompositeFilter>('AddressNullableCompositeFilter').implement({
  fields: (t) => ({
    equals: t.field({"required":false,"type":AddressObjectEqualityInput}),
    is: t.field({"required":false,"type":AddressWhereInput}),
    isNot: t.field({"required":false,"type":AddressWhereInput}),
    isSet: t.boolean({"required":false}),
  }),
});

export const AddressObjectEqualityInput = builder.inputRef<Prisma.AddressObjectEqualityInput>('AddressObjectEqualityInput').implement({
  fields: (t) => ({
    street: t.string({"required":true}),
    city: t.string({"required":true}),
    state: t.string({"required":true}),
    zip: t.string({"required":true}),
  }),
});

export const PostListRelationFilter = builder.inputRef<Prisma.PostListRelationFilter>('PostListRelationFilter').implement({
  fields: (t) => ({
    every: t.field({"required":false,"type":PostWhereInput}),
    some: t.field({"required":false,"type":PostWhereInput}),
    none: t.field({"required":false,"type":PostWhereInput}),
  }),
});

export const AddressOrderByInput = builder.inputRef<Prisma.AddressOrderByInput>('AddressOrderByInput').implement({
  fields: (t) => ({
    street: t.field({"required":false,"type":SortOrder}),
    city: t.field({"required":false,"type":SortOrder}),
    state: t.field({"required":false,"type":SortOrder}),
    zip: t.field({"required":false,"type":SortOrder}),
  }),
});

export const PostOrderByRelationAggregateInput = builder.inputRef<Prisma.PostOrderByRelationAggregateInput>('PostOrderByRelationAggregateInput').implement({
  fields: (t) => ({
    _count: t.field({"required":false,"type":SortOrder}),
  }),
});

export const UserCountOrderByAggregateInput = builder.inputRef<Prisma.UserCountOrderByAggregateInput>('UserCountOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    email: t.field({"required":false,"type":SortOrder}),
    name: t.field({"required":false,"type":SortOrder}),
  }),
});

export const UserMaxOrderByAggregateInput = builder.inputRef<Prisma.UserMaxOrderByAggregateInput>('UserMaxOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    email: t.field({"required":false,"type":SortOrder}),
    name: t.field({"required":false,"type":SortOrder}),
  }),
});

export const UserMinOrderByAggregateInput = builder.inputRef<Prisma.UserMinOrderByAggregateInput>('UserMinOrderByAggregateInput').implement({
  fields: (t) => ({
    id: t.field({"required":false,"type":SortOrder}),
    email: t.field({"required":false,"type":SortOrder}),
    name: t.field({"required":false,"type":SortOrder}),
  }),
});

export const StringNullableWithAggregatesFilter = builder.inputRef<Prisma.StringNullableWithAggregatesFilter>('StringNullableWithAggregatesFilter').implement({
  fields: (t) => ({
    equals: t.string({"required":false}),
    in: t.stringList({"required":false}),
    notIn: t.stringList({"required":false}),
    lt: t.string({"required":false}),
    lte: t.string({"required":false}),
    gt: t.string({"required":false}),
    gte: t.string({"required":false}),
    contains: t.string({"required":false}),
    startsWith: t.string({"required":false}),
    endsWith: t.string({"required":false}),
    mode: t.field({"required":false,"type":QueryMode}),
    not: t.field({"required":false,"type":NestedStringNullableWithAggregatesFilter}),
    _count: t.field({"required":false,"type":NestedIntNullableFilter}),
    _min: t.field({"required":false,"type":NestedStringNullableFilter}),
    _max: t.field({"required":false,"type":NestedStringNullableFilter}),
    isSet: t.boolean({"required":false}),
  }),
});

export const UserCreateNestedOneWithoutPostsInput = builder.inputRef<Prisma.UserCreateNestedOneWithoutPostsInput>('UserCreateNestedOneWithoutPostsInput').implement({
  fields: (t) => ({
    create: t.field({"required":false,"type":UserCreateWithoutPostsInput}),
    connectOrCreate: t.field({"required":false,"type":UserCreateOrConnectWithoutPostsInput}),
    connect: t.field({"required":false,"type":UserWhereUniqueInput}),
  }),
});

export const StringFieldUpdateOperationsInput = builder.inputRef<Prisma.StringFieldUpdateOperationsInput>('StringFieldUpdateOperationsInput').implement({
  fields: (t) => ({
    set: t.string({"required":false}),
  }),
});

export const UserUpdateOneRequiredWithoutPostsNestedInput = builder.inputRef<Prisma.UserUpdateOneRequiredWithoutPostsNestedInput>('UserUpdateOneRequiredWithoutPostsNestedInput').implement({
  fields: (t) => ({
    create: t.field({"required":false,"type":UserCreateWithoutPostsInput}),
    connectOrCreate: t.field({"required":false,"type":UserCreateOrConnectWithoutPostsInput}),
    upsert: t.field({"required":false,"type":UserUpsertWithoutPostsInput}),
    connect: t.field({"required":false,"type":UserWhereUniqueInput}),
    update: t.field({"required":false,"type":UserUpdateWithoutPostsInput}),
  }),
});

export const AddressNullableCreateEnvelopeInput = builder.inputRef<Prisma.AddressNullableCreateEnvelopeInput>('AddressNullableCreateEnvelopeInput').implement({
  fields: (t) => ({
    set: t.field({"required":false,"type":AddressCreateInput}),
  }),
});

export const AddressCreateInput = builder.inputRef<Prisma.AddressCreateInput>('AddressCreateInput').implement({
  fields: (t) => ({
    street: t.string({"required":true}),
    city: t.string({"required":true}),
    state: t.string({"required":true}),
    zip: t.string({"required":true}),
  }),
});

export const PostCreateNestedManyWithoutAuthorInput = builder.inputRef<Prisma.PostCreateNestedManyWithoutAuthorInput>('PostCreateNestedManyWithoutAuthorInput').implement({
  fields: (t) => ({
    create: t.field({"required":false,"type":PostCreateWithoutAuthorInput}),
    connectOrCreate: t.field({"required":false,"type":[PostCreateOrConnectWithoutAuthorInput]}),
    createMany: t.field({"required":false,"type":PostCreateManyAuthorInputEnvelope}),
    connect: t.field({"required":false,"type":[PostWhereUniqueInput]}),
  }),
});

export const NullableStringFieldUpdateOperationsInput = builder.inputRef<Prisma.NullableStringFieldUpdateOperationsInput>('NullableStringFieldUpdateOperationsInput').implement({
  fields: (t) => ({
    set: t.string({"required":false}),
    unset: t.boolean({"required":false}),
  }),
});

export const AddressNullableUpdateEnvelopeInput = builder.inputRef<Prisma.AddressNullableUpdateEnvelopeInput>('AddressNullableUpdateEnvelopeInput').implement({
  fields: (t) => ({
    set: t.field({"required":false,"type":AddressCreateInput}),
    upsert: t.field({"required":false,"type":AddressUpsertInput}),
    unset: t.boolean({"required":false}),
  }),
});

export const PostUpdateManyWithoutAuthorNestedInput = builder.inputRef<Prisma.PostUpdateManyWithoutAuthorNestedInput>('PostUpdateManyWithoutAuthorNestedInput').implement({
  fields: (t) => ({
    create: t.field({"required":false,"type":PostCreateWithoutAuthorInput}),
    connectOrCreate: t.field({"required":false,"type":[PostCreateOrConnectWithoutAuthorInput]}),
    upsert: t.field({"required":false,"type":[PostUpsertWithWhereUniqueWithoutAuthorInput]}),
    createMany: t.field({"required":false,"type":PostCreateManyAuthorInputEnvelope}),
    set: t.field({"required":false,"type":[PostWhereUniqueInput]}),
    disconnect: t.field({"required":false,"type":[PostWhereUniqueInput]}),
    delete: t.field({"required":false,"type":[PostWhereUniqueInput]}),
    connect: t.field({"required":false,"type":[PostWhereUniqueInput]}),
    update: t.field({"required":false,"type":[PostUpdateWithWhereUniqueWithoutAuthorInput]}),
    updateMany: t.field({"required":false,"type":[PostUpdateManyWithWhereWithoutAuthorInput]}),
    deleteMany: t.field({"required":false,"type":[PostScalarWhereInput]}),
  }),
});

export const NestedStringFilter = builder.inputRef<Prisma.NestedStringFilter>('NestedStringFilter').implement({
  fields: (t) => ({
    equals: t.string({"required":false}),
    in: t.stringList({"required":false}),
    notIn: t.stringList({"required":false}),
    lt: t.string({"required":false}),
    lte: t.string({"required":false}),
    gt: t.string({"required":false}),
    gte: t.string({"required":false}),
    contains: t.string({"required":false}),
    startsWith: t.string({"required":false}),
    endsWith: t.string({"required":false}),
    not: t.field({"required":false,"type":NestedStringFilter}),
  }),
});

export const NestedStringWithAggregatesFilter = builder.inputRef<Prisma.NestedStringWithAggregatesFilter>('NestedStringWithAggregatesFilter').implement({
  fields: (t) => ({
    equals: t.string({"required":false}),
    in: t.stringList({"required":false}),
    notIn: t.stringList({"required":false}),
    lt: t.string({"required":false}),
    lte: t.string({"required":false}),
    gt: t.string({"required":false}),
    gte: t.string({"required":false}),
    contains: t.string({"required":false}),
    startsWith: t.string({"required":false}),
    endsWith: t.string({"required":false}),
    not: t.field({"required":false,"type":NestedStringWithAggregatesFilter}),
    _count: t.field({"required":false,"type":NestedIntFilter}),
    _min: t.field({"required":false,"type":NestedStringFilter}),
    _max: t.field({"required":false,"type":NestedStringFilter}),
  }),
});

export const NestedIntFilter = builder.inputRef<Prisma.NestedIntFilter>('NestedIntFilter').implement({
  fields: (t) => ({
    equals: t.int({"required":false}),
    in: t.intList({"required":false}),
    notIn: t.intList({"required":false}),
    lt: t.int({"required":false}),
    lte: t.int({"required":false}),
    gt: t.int({"required":false}),
    gte: t.int({"required":false}),
    not: t.field({"required":false,"type":NestedIntFilter}),
  }),
});

export const NestedStringNullableFilter = builder.inputRef<Prisma.NestedStringNullableFilter>('NestedStringNullableFilter').implement({
  fields: (t) => ({
    equals: t.string({"required":false}),
    in: t.stringList({"required":false}),
    notIn: t.stringList({"required":false}),
    lt: t.string({"required":false}),
    lte: t.string({"required":false}),
    gt: t.string({"required":false}),
    gte: t.string({"required":false}),
    contains: t.string({"required":false}),
    startsWith: t.string({"required":false}),
    endsWith: t.string({"required":false}),
    not: t.field({"required":false,"type":NestedStringNullableFilter}),
    isSet: t.boolean({"required":false}),
  }),
});

export const AddressWhereInput = builder.inputRef<Prisma.AddressWhereInput>('AddressWhereInput').implement({
  fields: (t) => ({
    AND: t.field({"required":false,"type":[AddressWhereInput]}),
    OR: t.field({"required":false,"type":[AddressWhereInput]}),
    NOT: t.field({"required":false,"type":[AddressWhereInput]}),
    street: t.field({"required":false,"type":StringFilter}),
    city: t.field({"required":false,"type":StringFilter}),
    state: t.field({"required":false,"type":StringFilter}),
    zip: t.field({"required":false,"type":StringFilter}),
  }),
});

export const NestedStringNullableWithAggregatesFilter = builder.inputRef<Prisma.NestedStringNullableWithAggregatesFilter>('NestedStringNullableWithAggregatesFilter').implement({
  fields: (t) => ({
    equals: t.string({"required":false}),
    in: t.stringList({"required":false}),
    notIn: t.stringList({"required":false}),
    lt: t.string({"required":false}),
    lte: t.string({"required":false}),
    gt: t.string({"required":false}),
    gte: t.string({"required":false}),
    contains: t.string({"required":false}),
    startsWith: t.string({"required":false}),
    endsWith: t.string({"required":false}),
    not: t.field({"required":false,"type":NestedStringNullableWithAggregatesFilter}),
    _count: t.field({"required":false,"type":NestedIntNullableFilter}),
    _min: t.field({"required":false,"type":NestedStringNullableFilter}),
    _max: t.field({"required":false,"type":NestedStringNullableFilter}),
    isSet: t.boolean({"required":false}),
  }),
});

export const NestedIntNullableFilter = builder.inputRef<Prisma.NestedIntNullableFilter>('NestedIntNullableFilter').implement({
  fields: (t) => ({
    equals: t.int({"required":false}),
    in: t.intList({"required":false}),
    notIn: t.intList({"required":false}),
    lt: t.int({"required":false}),
    lte: t.int({"required":false}),
    gt: t.int({"required":false}),
    gte: t.int({"required":false}),
    not: t.field({"required":false,"type":NestedIntNullableFilter}),
    isSet: t.boolean({"required":false}),
  }),
});

export const UserCreateWithoutPostsInput = builder.inputRef<Prisma.UserCreateWithoutPostsInput>('UserCreateWithoutPostsInput').implement({
  fields: (t) => ({
    id: t.string({"required":false}),
    email: t.string({"required":true}),
    name: t.string({"required":false}),
    Address: t.field({"required":false,"type":AddressNullableCreateEnvelopeInput}),
  }),
});

export const UserCreateOrConnectWithoutPostsInput = builder.inputRef<Prisma.UserCreateOrConnectWithoutPostsInput>('UserCreateOrConnectWithoutPostsInput').implement({
  fields: (t) => ({
    where: t.field({"required":true,"type":UserWhereUniqueInput}),
    create: t.field({"required":true,"type":UserCreateWithoutPostsInput}),
  }),
});

export const UserUpsertWithoutPostsInput = builder.inputRef<Prisma.UserUpsertWithoutPostsInput>('UserUpsertWithoutPostsInput').implement({
  fields: (t) => ({
    update: t.field({"required":true,"type":UserUpdateWithoutPostsInput}),
    create: t.field({"required":true,"type":UserCreateWithoutPostsInput}),
  }),
});

export const UserUpdateWithoutPostsInput = builder.inputRef<Prisma.UserUpdateWithoutPostsInput>('UserUpdateWithoutPostsInput').implement({
  fields: (t) => ({
    email: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
    name: t.field({"required":false,"type":NullableStringFieldUpdateOperationsInput}),
    Address: t.field({"required":false,"type":AddressNullableUpdateEnvelopeInput}),
  }),
});

export const PostCreateWithoutAuthorInput = builder.inputRef<Prisma.PostCreateWithoutAuthorInput>('PostCreateWithoutAuthorInput').implement({
  fields: (t) => ({
    id: t.string({"required":false}),
    slug: t.string({"required":true}),
    title: t.string({"required":true}),
    body: t.string({"required":true}),
  }),
});

export const PostCreateOrConnectWithoutAuthorInput = builder.inputRef<Prisma.PostCreateOrConnectWithoutAuthorInput>('PostCreateOrConnectWithoutAuthorInput').implement({
  fields: (t) => ({
    where: t.field({"required":true,"type":PostWhereUniqueInput}),
    create: t.field({"required":true,"type":PostCreateWithoutAuthorInput}),
  }),
});

export const PostCreateManyAuthorInputEnvelope = builder.inputRef<Prisma.PostCreateManyAuthorInputEnvelope>('PostCreateManyAuthorInputEnvelope').implement({
  fields: (t) => ({
    data: t.field({"required":true,"type":[PostCreateManyAuthorInput]}),
  }),
});

export const AddressUpsertInput = builder.inputRef<Prisma.AddressUpsertInput>('AddressUpsertInput').implement({
  fields: (t) => ({
    set: t.field({"required":true,"type":AddressCreateInput}),
    update: t.field({"required":true,"type":AddressUpdateInput}),
  }),
});

export const PostUpsertWithWhereUniqueWithoutAuthorInput = builder.inputRef<Prisma.PostUpsertWithWhereUniqueWithoutAuthorInput>('PostUpsertWithWhereUniqueWithoutAuthorInput').implement({
  fields: (t) => ({
    where: t.field({"required":true,"type":PostWhereUniqueInput}),
    update: t.field({"required":true,"type":PostUpdateWithoutAuthorInput}),
    create: t.field({"required":true,"type":PostCreateWithoutAuthorInput}),
  }),
});

export const PostUpdateWithWhereUniqueWithoutAuthorInput = builder.inputRef<Prisma.PostUpdateWithWhereUniqueWithoutAuthorInput>('PostUpdateWithWhereUniqueWithoutAuthorInput').implement({
  fields: (t) => ({
    where: t.field({"required":true,"type":PostWhereUniqueInput}),
    data: t.field({"required":true,"type":PostUpdateWithoutAuthorInput}),
  }),
});

export const PostUpdateManyWithWhereWithoutAuthorInput = builder.inputRef<Prisma.PostUpdateManyWithWhereWithoutAuthorInput>('PostUpdateManyWithWhereWithoutAuthorInput').implement({
  fields: (t) => ({
    where: t.field({"required":true,"type":PostScalarWhereInput}),
    data: t.field({"required":true,"type":PostUpdateManyMutationInput}),
  }),
});

export const PostScalarWhereInput = builder.inputRef<Prisma.PostScalarWhereInput>('PostScalarWhereInput').implement({
  fields: (t) => ({
    AND: t.field({"required":false,"type":[PostScalarWhereInput]}),
    OR: t.field({"required":false,"type":[PostScalarWhereInput]}),
    NOT: t.field({"required":false,"type":[PostScalarWhereInput]}),
    id: t.field({"required":false,"type":StringFilter}),
    slug: t.field({"required":false,"type":StringFilter}),
    title: t.field({"required":false,"type":StringFilter}),
    body: t.field({"required":false,"type":StringFilter}),
    authorId: t.field({"required":false,"type":StringFilter}),
  }),
});

export const PostCreateManyAuthorInput = builder.inputRef<Prisma.PostCreateManyAuthorInput>('PostCreateManyAuthorInput').implement({
  fields: (t) => ({
    id: t.string({"required":false}),
    slug: t.string({"required":true}),
    title: t.string({"required":true}),
    body: t.string({"required":true}),
  }),
});

export const AddressUpdateInput = builder.inputRef<Prisma.AddressUpdateInput>('AddressUpdateInput').implement({
  fields: (t) => ({
    street: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
    city: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
    state: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
    zip: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  }),
});

export const PostUpdateWithoutAuthorInput = builder.inputRef<Prisma.PostUpdateWithoutAuthorInput>('PostUpdateWithoutAuthorInput').implement({
  fields: (t) => ({
    slug: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
    title: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
    body: t.field({"required":false,"type":StringFieldUpdateOperationsInput}),
  }),
});