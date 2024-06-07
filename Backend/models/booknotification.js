const mongoose = require('mongoose');

const bookNotificationSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId, default: mongoose.Types.ObjectId,auto:true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
});

const BookNotification = mongoose.model('BookNotification', bookNotificationSchema);

module.exports = BookNotification;