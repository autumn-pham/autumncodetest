const express = require('express');
const Book = require('../models/books.js');
const books = express.Router();
const booksSeed = require('../models/seed.js');

// EDIT

books.get('/:id/edit', (req, res)=>{
  Book.findById(req.params.id, (err, foundBook)=>{
    res.json(foundBook);
    })
});

// DELETE
books.delete('/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id, (err, deletedBook) => {
    res.json(deletedBook);
  })
})

// SHOW

books.get('/:id', (req, res)=>{
  Book.findById(req.params.id, (error, foundBook)=>{
    res.json(foundBook);
  });
});


// UPDATE

books.put('/:id', (req, res)=>{
  Book.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedBook)=>{
    res.json(updatedBook);
  });
});

// CREATE

books.post('/', (req, res)=>{
  Book.create(req.body, (error, createdBook)=>{
    res.redirect('/');
  });
});

// INDEX

books.get('/', (req, res) =>{
  Book.find({}, (error, allBooks)=>{
    res.json(allBooks);
  });
});

// SEED

books.get('/seed', (req, res) => {
  Books.insertMany(booksSeed, (err, manyBooks) => {
    res.redirect('/')
  })
})

module.exports = books;
