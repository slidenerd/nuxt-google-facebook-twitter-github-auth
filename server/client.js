const redis = require('redis')
const debug = require('debug')('auth:server:client')

const client = redis.createClient({
  host: process.env.REDIS_SESSION_HOST,
  port: process.env.REDIS_SESSION_PORT,
  password: process.env.REDIS_SESSION_PASSWORD,
  db: process.env.REDIS_SESSION_DB
})

client.on('error', (err) => {
  debug('Error encountered in redis client %O', err)
})

module.exports = client
