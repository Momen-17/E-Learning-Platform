const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const courseRoutes = require('./routes/courseRoutes');
const authRoutes = require('./routes/authRoutes');
const punycode = require('punycode');

const app = express();

app.use(bodyParser.json());

app.use('/api', courseRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect('mongodb+srv://admin:admin@cluster0.pxj04.mongodb.net/')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error);
    });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
