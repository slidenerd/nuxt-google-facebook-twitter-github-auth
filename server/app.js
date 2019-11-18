const express = require('express')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const debug = require('debug')('auth:/server/app')
const client = require('./client')

const store = new RedisStore({ client })
// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  session({
    secret: 'super-secret-key',
    resave: false,
    rolling: true,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 1000 },
    store
  })
)

// Create express router
const router = express.Router()

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})
app.use((req, res, next) => {
  debug(
    req.session.cookie,
    'straight from the source',
    req.session.cookie.expires,
    req.session.cookie.maxAge
  )
  next()
})

// Add POST - /api/login
router.post('/login', (req, res) => {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.session.authUser = { username: 'demo' }
    return res.json({ username: 'demo' })
  }
  res.status(401).json({ message: 'Bad credentials' })
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      debug(err)
    }
  })
  res.json({ ok: true })
})

app.use('/auth', router)
module.exports = app
