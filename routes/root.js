"use strict";
const path = require("path");

module.exports = async function (fastify, opts) {
  fastify.register(require("@fastify/static"), {
    root: path.join(__dirname, "../public"),
    // prefix: "/public/", // optional: default '/'
  });

  fastify.get("/root", async function (request, reply) {
    return { root: true };
  });
  fastify.get("/", async function (request, reply) {
    console.log(__dirname);
    return reply.sendFile("index.html")
  });
};
