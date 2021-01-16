// Dependencies

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require ('mongoose');
const db = mongoose.connection;
require('dotenv').config();

//Port

// Allow use of Heroku's port or own local port
const PORT = process.env.PORT || 3000

//Database

// Connection to database
const MONGODB_URI = process.env.MONGODB_URI
// Connect to Mongo &
// Fix Depreciation Warnings from Mongoose
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

// Middleware

//use public folder for static assets
app.use(express.static('public'));
// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON
app.use(cors());

// Controllers
const booksController = require('./controllers/books_controller.js');
app.use('/books', booksController);

// Routes

app.get('/' , (req, res) => {
  res.redirect('/books');
});

// Listener

app.listen(PORT, () => console.log( 'Listening on port:', PORT));
