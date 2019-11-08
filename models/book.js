const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema({
  title: String,
  authors: Array,
  description: String,
  image: String,
  link: String
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
