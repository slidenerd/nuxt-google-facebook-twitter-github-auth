const redis = require('redis')

const client = redis.createClient({
  host: 'localhost',
  port: 6379,
  password: '1CO%3Hm%EkdYXWrYsDs7H%YMuKp4gqcJF0sI1iHybu7i9U6z',
  db: 1
})

module.exports = client
