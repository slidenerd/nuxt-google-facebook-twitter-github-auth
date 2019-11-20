const passport = require('passport')
const debug = require('debug')('auth:server:config:passport')
const LocalStrategy = require('passport-local').Strategy
const { Strategy: FacebookStrategy } = require('passport-facebook')
const { Strategy: TwitterStrategy } = require('passport-twitter')
const { Strategy: GoogleStrategy } = require('passport-google-oauth2')
const { Strategy: GitHubStrategy } = require('passport-github2')

passport.serializeUser((user, cb) => {
  debug.enabled && debug('serializeUser() user %O', user)
  cb(null, user.email)
})

passport.deserializeUser((id, cb) => {
  debug.enabled && debug('deserializeUser() userId %s', id)
  cb(null, { email: id })
})

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    (req, email, password, done) => {
      debug.enabled &&
        debug(
          'LocalStrategy session %O email %s password %s',
          req.session,
          email,
          password
        )
      if (email === 'demo' && password === 'demo') {
        return done(null, { email: 'demo' }, 'Success')
      } else {
        return done(null, false, 'Email or password does not match')
      }
    }
  )
)

/**
 * Sign in with Facebook.
 * Check README for the structure of the Facebook profile object
 */
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: '/auth/facebook/callback',
      profileFields: ['name', 'email', 'link', 'locale', 'timezone', 'gender'],
      passReqToCallback: true
    },
    (req, accessToken, refreshToken, profile, done) => {
      debug.enabled &&
        debug(
          'FacebookStrategy session %O accessToken %s refreshToken %s profile %O',
          req.session,
          accessToken,
          refreshToken,
          profile
        )
      done(null, { email: profile._json.email })
    }
  )
)

/**
 * Sign in with Twitter.
 * Check README for the structure of the Twitter profile object
 */
passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CLIENT_ID,
      consumerSecret: process.env.TWITTER_CLIENT_SECRET,
      callbackURL: '/auth/twitter/callback',
      includeEmail: true,
      passReqToCallback: true
    },
    (req, accessToken, tokenSecret, profile, done) => {
      debug.enabled &&
        debug(
          'TwitterStrategy session %O accessToken %s refreshToken %s profile %O',
          req.session,
          accessToken,
          tokenSecret,
          profile
        )
      done(null, { email: profile._json.email })
    }
  )
)

/**
 * Use the GoogleStrategy within Passport.
 * Strategies in Passport require a `verify` function, which accept
 * credentials (in this case, an accessToken, refreshToken, and Google
 * profile), and invoke a callback with a user object.
 * Check README for the structure of the Google profile object
 */
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
      passReqToCallback: true
    },
    (req, accessToken, refreshToken, profile, done) => {
      debug.enabled &&
        debug(
          'GoogleStrategy session %O accessToken %s refreshToken %s profile %O',
          req.session,
          accessToken,
          refreshToken,
          profile
        )
      done(null, { email: profile.email })
    }
  )
)

/**
 * Sign in using GitHub
 * Check README for the structure of the GitHub profile object
 */
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: '/auth/github/callback',
      passReqToCallback: true
    },
    (req, accessToken, refreshToken, profile, done) => {
      debug.enabled &&
        debug(
          'GitHubStrategy session %O accessToken %s refreshToken %s profile %O',
          req.session,
          accessToken,
          refreshToken,
          profile
        )
      done(null, { email: profile._json.email })
    }
  )
)
