const redis = require('redis')

const client = redis.createClient({
  host: 'localhost',
  port: 6379
})

module.exports = client
