const connectToMongo = require('./db');
var cors = require('cors')

const express = require('express')
connectToMongo();

const app = express()
const port = 5000

app.use(cors())
 
// // Allow requests from 'https://cloud-note-tan.vercel.app'
// app.use(cors({
//   origin: 'https://cloud-note-tan.vercel.app'
// }));

app.use(express.json());

// Available Routes

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`CloudNote backend listening at http://localhost:${port}`)
})



