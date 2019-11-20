const express = require('express')
const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const passport = require('passport')

const client = require('./client')
const store = new RedisStore({ client })

module.exports = (app) => {
  // https://stackoverflow.com/questions/23413401/what-does-trust-proxy-actually-do-in-express-js-and-do-i-need-to-use-it
  app.set('trust proxy', 1) // trust first proxy
  app.disable('x-powered-by')
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      rolling: true,
      saveUninitialized: false,
      cookie: {
        maxAge: 60 * 1000 * process.env.SESSION_MAX_AGE_MINUTES,
        httpOnly: true,
        secure:
          process.env.NODE_ENV === 'production' ||
          process.env.NODE_ENV === 'staging'
      },
      store
    })
  )
  // https://github.com/tj/connect-redis/issues/289
  // app.use(
  //   session({
  //     secret: 'super-secret-key',
  //     name: 'test',
  //     store,
  //     rolling: true,
  //     saveUninitialized: true,
  //     unset: 'destroy',
  //     resave: true,
  //     proxy: true,
  //     logErrors: process.env.DEBUG === 'true',
  //     cookie: {
  //       path: '/',
  //       domain: '.' + 'localhost',
  //       secure: false,
  //       sameSite: true,
  //       httpOnly: true,
  //       expires: false,
  //       maxAge: 60000 * 1
  //     }
  //   })
  // )
  app.use(passport.initialize())
  app.use(passport.session())
  require('./config/passport')
}
