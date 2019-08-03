const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path')
const jwt = require('jsonwebtoken')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')
const withAuth = require('./middleware')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(helmet())
// express native solution for bodyParser.json() pkg

require('dotenv/config')

// Import routes
const postsRoute = require('./routes/posts')
const User = require('./models/User')

/** 
 * middlewares
 */
app.use(cors())
app.use('/api/posts', postsRoute)


app.get('/api/home', (req, res) => {
  res.send('welcome')
})

app.get('/api/secret', withAuth, (req, res) => {
  res.send('the password is potato')
})

// REGISTER
app.post('/api/register', (req, res) => {
  const { email, password } = req.body
  const user = new User({ email, password })
  console.log(email, password)
  user.save(err => {
      if (err) {
          res.status(500)
              .json({error: "error registering new user, please try again."})
      } else {
          res.status(200).json("registration successful!")
      }
  })
})

// LOGIN
app.post('/api/authenticate', function (req, res) {
  const { email, password } = req.body
  User.findOne({ email }, function(err, user) {
    if (err) {
      console.error(err)
      res.status(500)
         .json({
           error: 'internal error please try again'
         })
    } else if (!user) {
      res.status(401)
         .json({
           error: 'incorrect email or password'
         })
    } else {
      user.isCorrectPassword(password, function(err, same) {
        if (err) {
          res.status(500)
             .json({
               error: 'internal error please try again'
             })
        } else if (!same) {
          res.status(401)
             .json({
               error: 'incorrect email or password'
             })
        } else {
          // token time woo
          const payload = {email}
          const token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: '1h'
          })
          res.cookie('token', token, { httpOnly: true })
             .sendStatus(200)
        }
      })
    }
  })
})

// GET CURRENT USER
app.get('/api/settings', withAuth, function(req, res) {
  return 'hi'
})

// CHECK TOKEN
app.get('/api/checkToken', withAuth, function(req, res) {
  res.sendStatus(200)
})

// connect to db via mongoose
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true }, 
    () => { console.log('connected to db') }
)

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

let port = process.env.PORT || 4001

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});