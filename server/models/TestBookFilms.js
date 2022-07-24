const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const bookFilmSchema = new Schema({
  book: {
    type: String,
    required: true,
    unique: true,
  },
  film: {
    type: String,
    required: false,
    unique: false,
  },
});

const BookFilm = model('BookFilm', bookFilmSchema);

module.exports = BookFilm;
