const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  // id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId() },
  id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId ,auto: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;