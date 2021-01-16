const express = require('express');
const Book = require('../models/books.js');
const books = express.Router();

// EDIT

books.get('/:id/edit', (req, res)=>{
  Book.findById(req.params.id, (err, foundBook)=>{
    res.render(
    	'edit.html.ejs', {
        book: foundBook,
      })
    })
});

// DELETE
books.delete('/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id, (err, deletedBook) => {
    res.redirect('/')
  })
})

// SHOW

books.get('/:id', (req, res)=>{
  Book.findById(req.params.id, (error, foundWorkout)=>{
    res.render('show.html.ejs', {
      book: foundBook
    });
  });
});


// UPDATE

books.put('/:id', (req, res)=>{
  Book.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedModel)=>{
    res.redirect('/');
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
      res.render('index.html.ejs', {
        books: allBooks
      });
  });
});

// SEED

books.get('/seed', (req, res) => {
  Book.create(
    [
      {
        title: 'The Book of Salt',
        author: 'Monique Truong',
        img: 'https://i.ibb.co/B20dv0p/The-Bookof-Salt.jpg',
        factoid: "Monique Truong, like the characters in her novel, cooks to remind herself of where she's been."
      },
      {
        title: 'Die Mittagsfrau (The Blind Side of the Heart)',
        author: 'Julia Franck',
        img: 'https://i.ibb.co/PwQXhf8/Die-Mittagsfrau.jpg',
        factoid: "The opening scene of this novel is based on a tragic event in Frank's own family history."
      },
      {
        title: 'The Subtle Art of Not Giving a F*ck',
        author: 'Mark Manson',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcResk9YQxlpNZl8x8waNRV841p-MsO47oA0gKYpJriCypy0Y8twj5y9gVIZf3XTwSae-XZdmDGw&usqp=CAc',
        factoid: "Manson doesn't actually advise people to not care about anything; he states that people must decide what their values are and what they want to care about."
      },
      {
        title: "Can't Hurt Me: Master Your Mind and Defy the Odds",
        author: 'David Goggins',
        img: 'https://i.ibb.co/Y2M2nT2/Cant-Hurt-Me.jpg',
        factoid: 'Goggins believes that most of us only tap into 40% of our potential and capabilities.'
      },
      {
        title: 'A Farewell to Arms',
        author: 'Ernest Hemingway',
        img: 'https://i.ibb.co/BqqJs8N/AFarewellto-Arms.jpg',
        factoid: 'Hemingway wrote no less than 39 alternate endings to this novel.'
      }
    ],
    (error, data) => {
      res.redirect('/')
  })
})

module.exports = books;
