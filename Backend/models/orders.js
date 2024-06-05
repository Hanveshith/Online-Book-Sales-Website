const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId,auto:true},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bookId: { type: [mongoose.Schema.Types.ObjectId], ref: 'Book', required: true },
  Quantity: { type: Number, required: true },
  OrderId: { type: String, required: true },
  paymentId: { type: String, required: true },
  orderDate: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;