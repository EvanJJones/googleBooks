const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
// const router = require('express').Router();
const Book = require('./models/book.js');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/books', {
  useNewUrlParser: true
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Define API routes here
app.post('/api/book', ({ body }, res) => {
  Book.create(body)
    .then((dbBook) => {
      res.json(dbBook);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

app.delete('/api/delete/:id', (req, res) => {
  Book.remove(
    {
      _id: req.params.id
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.get('/api/book', (req, res) => {
  Book.find({})
    .then((dbBook) => {
      res.json(dbBook);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
  res.json('test');
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
