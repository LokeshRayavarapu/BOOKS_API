const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const booksRoutes = require('./routes/books');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/library', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

app.use(bodyParser.json());
app.use('/api/books', booksRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
