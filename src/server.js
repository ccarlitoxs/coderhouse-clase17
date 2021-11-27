import express from 'express';
import cors from 'cors';
import { carritosRouter, productosRouter, testRouter } from './routes/index.js';
import passport from 'passport'
import { Strategy } from 'passport-facebook'
import path from 'path'
import session from 'express-session'
import dotenv from 'dotenv'
import handlebars from 'express-handlebars'

dotenv.config()

passport.use(new Strategy({
    clientID: process.env.FACEBOOK_ID,
    clientSecret: process.env.FACEBOOK_SECRET,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'photos'],
    scope: ['email']
  }, (accessToken, refreshToken, userProfile, done) => {
    console.log(userProfile)
    return done(null, userProfile)
  }))
  
  passport.serializeUser((user, done) => {
    done(null,user)
  })
  passport.deserializeUser((id, done) => {
    done(null, id)
  })


const app = express()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge:300000
    }
  }))

app.use(passport.initialize())
app.use(passport.session())
app.engine('.hbs', handlebars({ extname: '.hbs', defaultLayout: 'main.hbs' }))
app.set('view engine','.hbs')
app.use(express.static('public'))

app.get('/login', (req, res) => {
    res.sendFile(path.resolve() + '/public/login.html')
  })
app.get('/auth/facebook', passport.authenticate('facebook'))

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
successRedirect: '/',
failureRedirect: '/failLogin'
}))
app.get('/', (req, res) => {
    if (req.isAuthenticated()) {
      res.redirect('/datos')
    } else {
      res.redirect('/login')
    }
  })
  
  app.get('/failLogin', (req, res) => {
    console.log('Login error')
    res.render('login-error', {})
    
  })
  
  app.get('/datos', (req, res) => {
    if (req.isAuthenticated()) {
      if (!req.user.contador) req.user.contador = 0
      req.user.contador++
      res.render('datos', {
        nombre: req.user.displayName,
        foto: req.user.photos[0].value,
        contador:req.user.contador
      })
    }
  })
  
  app.get('/logout',(req, res)=> {
    req.logout()
    res.redirect('/')
  })

app.use('/productos', productosRouter.router)
app.use('/carritos', carritosRouter.router)
app.use('/api/productos-test', testRouter.router)




export{ app }