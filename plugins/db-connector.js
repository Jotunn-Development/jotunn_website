const { default: fastifyMongodb } = require('fastify-mongodb')
const fastifyPlugin = require('fastify-plugin')

async function dbConnector (fastify, options) {
  fastify.register(require('fastify-mongodb'), {
    url: process.env.MONGO
  })
}

module.exports = fastifyPlugin(dbConnector)