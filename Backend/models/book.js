const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  // id: { type: mongoose.Schema.Types.ObjectId, default:()=> mongoose.Types.ObjectId() },
  BookTitle: { type: String, required: true },
  BookImage: {type: String,require: true},
  BookDescription: { type: String, required: true },
  BookAuthor: { type: String, required: true },
  BookPublisher: { type: String, required: true },
  BookCategories: { type: [String], required: true },
  BookPrice: { type: Number, required: true },
  BookYear: { type: Number, required: true },
  BookLanguage: { type: String, required: true },
  BookOfferPrice: { type: Number },
  BookRating: { type: Number },
  Stock: { type: Number, default: 0 },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;