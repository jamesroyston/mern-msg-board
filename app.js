const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
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

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listening on port ${port}`)
});