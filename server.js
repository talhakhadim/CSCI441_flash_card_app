const express = require('express')
const app = express()
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 5000;
require('dotenv').config();



connectDB();

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
    )



const flashcardRoutes = require('./routes/flashcardRoutes');



