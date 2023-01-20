/* eslint-disable */
import type { Prisma, Post, User } from "./client";
export default interface PrismaTypes {
    Post: {
        Name: "Post";
        Shape: Post;
        Include: Prisma.PostInclude;
        Select: Prisma.PostSelect;
        OrderBy: Prisma.PostOrderByWithRelationInput;
        WhereUnique: Prisma.PostWhereUniqueInput;
        Where: Prisma.PostWhereInput;
        RelationName: "Author";
        ListRelations: never;
        Relations: {
            Author: {
                Shape: User;
                Types: PrismaTypes["User"];
            };
        };
    };
    User: {
        Name: "User";
        Shape: User;
        Include: Prisma.UserInclude;
        Select: Prisma.UserSelect;
        OrderBy: Prisma.UserOrderByWithRelationInput;
        WhereUnique: Prisma.UserWhereUniqueInput;
        Where: Prisma.UserWhereInput;
        RelationName: "Posts";
        ListRelations: "Posts";
        Relations: {
            Posts: {
                Shape: Post[];
                Types: PrismaTypes["Post"];
            };
        };
    };
}