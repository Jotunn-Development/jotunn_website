require('dotenv').config()
const fastify = require('fastify')({
  logger: true
})

const port = process.env.PORT || 3000

fastify.register(require('./plugins/db-connector'))
fastify.register(require('./routes/main-routes'))

const start = async () => {
  try {
    await fastify.listen(port)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()