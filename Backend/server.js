const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const connectDB = require('./config/connectDB');
const router = require('./routes/auth');

const port = process.env.PORT || 5000;

// Connect with the database
connectDB();

// Middleware
app.use(express.json());
/*app.use(cors({
    origin: 'http://localhost:3000/',
    credentials: true
  }));*/
  app.use(cors())
  app.use(express.urlencoded({extended:false}))
  
// Routes
const authRouter=require('./routes/auth')
//const serviceRouter=require('./routes/service')

app.use('/api/auth', authRouter);
//app.use('/api/service',serviceRouter)

app.listen(port, () => console.log(`Server running on port ${port}`));
