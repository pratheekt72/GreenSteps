require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./Config/db');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.get('/', (req, res) =>
{
  res.send('Backend is working!');
});

app.use('/api/users', require('./routers/userRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server started on port ${PORT'));
