import express from 'express'
import http from 'http'
import next from 'next'
import session from 'express-session'
import passport from 'passport'
import Auth0Strategy from 'passport-auth0'
import uid from 'uid-safe'
import cors from 'cors'
import authRoutes from '../auth-routes'

require('dotenv').config({ path: '.env.local' })

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // 2 - add session management to Express
  const sessionConfig = {
    secret: uid.sync(18),
    cookie: {
      maxAge: 86400 * 1000 // 24 hours in milliseconds
    },
    resave: false,
    saveUninitialized: true
  }
  server.use(session(sessionConfig))

  // 3 - configuring Auth0Strategy
  const auth0Strategy = new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: 'http://localhost:4000/api/callback',
      passReqToCallback: true
    },
    function (req, accessToken, refreshToken, extraParams, profile, done) {
      req.session.accessToken = accessToken
      return done(null, profile)
    }
  )

  server.use(cors())

  // 4 - configuring Passport
  passport.use(auth0Strategy)
  passport.serializeUser((user, done) => done(null, user))
  passport.deserializeUser((user, done) => done(null, user))

  // 5 - adding Passport and authentication routes
  server.use(passport.initialize())
  server.use(passport.session())
  server.use(authRoutes)

  // 6 - you are restricting access to some routes
  const restrictAccess = (req, res, next) => {
    if (!req.isAuthenticated()) { // testing
      return res.redirect('/login')
    } else {
      // res.cookie('token', req.session.accessToken, { maxAge: 900000, httpOnly: false })
      next()
    }
  }

  if (!dev) {
    server.use('/api/*', restrictAccess)
  }

  server.use('/dash/*', restrictAccess)

  // handling everything else with Next.js
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  const PORT = parseInt(process.env.PORT, 10) || 4000

  http.createServer(server).listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
  })
})
