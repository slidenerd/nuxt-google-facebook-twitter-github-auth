require('./config')
const express = require('express')
const middlewares = require('./middlewares')
const authRouter = require('./routes/auth')
const app = express()
middlewares(app)

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
// router.use((req, res, next) => {
//   Object.setPrototypeOf(req, app.request)
//   Object.setPrototypeOf(res, app.response)
//   req.res = res
//   res.req = req
//   next()
// })

app.use('/auth', authRouter)
module.exports = app
