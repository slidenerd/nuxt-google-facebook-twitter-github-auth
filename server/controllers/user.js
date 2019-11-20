const passport = require('passport')
const debug = require('debug')('auth:server:controllers:user')

exports.postLogin = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err)
    }
    if (!user) {
      debug.enabled &&
        debug(
          'postLogin() authenticated user not found, user %O, info %O session %O, req.user %O',
          user,
          info,
          req.session,
          req.user
        )
      return res.status(401).json({ message: info })
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err)
      }
      debug.enabled &&
        debug(
          'postLogin() authenticated user found, user %O, info %O session %O, req.user %O',
          user,
          info,
          req.session,
          req.user
        )
      return res.json(req.user)
    })
  })(req, res, next)
}

/**
 * GET /logout
 * Log out.
 */
exports.postLogout = (req, res) => {
  req.logout()
  req.session.destroy((err) => {
    if (err)
      debug.enabled &&
        debug(
          'postLogout() Error : Failed to destroy the session during logout %O',
          err
        )
    req.user = null
    res.json({ ok: true })
    debug.enabled &&
      debug(
        'postLogout() session destroyed, session %O req.user %O',
        req.session,
        req.user
      )
  })
}
