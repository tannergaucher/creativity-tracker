"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Category",
    embedded: false
  },
  {
    name: "Session",
    embedded: false
  },
  {
    name: "Day",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/tanner-gaucher/creativity-tracker-backend/dev`
});
exports.prisma = new exports.Prisma();
