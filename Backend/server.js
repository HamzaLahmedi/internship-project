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
app.use(cors());

// Routes
app.use('/api/auth', router);

app.listen(port, () => console.log(`Server running on port ${port}`));
