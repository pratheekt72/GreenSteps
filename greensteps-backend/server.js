const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./Config/db')


dotenv.config()
connectDB();

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/users', require('./routes/userRoutes'))
