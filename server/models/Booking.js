const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  brand: { type: String, required: true },
  issue: { type: String, required: true },
  status: { type: String, enum: ['pending', 'completed', 'cancelled'], default: 'pending' },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
