const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// express native solution for bodyParser.json() pkg

require('dotenv/config')

// Import routes
const postsRoute = require('./routes/posts')

/** 
 * middlewares
 */
app.use(cors())
app.use('/api/posts', postsRoute)

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