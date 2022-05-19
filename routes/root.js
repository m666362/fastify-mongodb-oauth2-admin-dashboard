"use strict";
const path = require("path");

module.exports = async function (fastify, opts) {
  fastify.register(require("@fastify/static"), {
    root: path.join(__dirname, "../public"),
    // prefix: "/public/", // optional: default '/'
  });

  

  fastify.route({
    method: "GET",
    url: "/",
    handler: async (request, reply) => {
      return reply.sendFile("index.html")
    },
  });
};
