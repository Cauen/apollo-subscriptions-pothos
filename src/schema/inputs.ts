import { builder } from "./builder";

export const Json = builder.scalarType("Json", {
  serialize: (value) => value,
});
