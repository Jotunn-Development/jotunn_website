const { default: fastify } = require("fastify")

async function mainRoutes (fastify, options) {
  // const collection = fastify.mongo.db.collection('data')

  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
}

module.exports = mainRoutes