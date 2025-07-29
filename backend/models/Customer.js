const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: String,
  phone: String,
  product: String,
  contactDate: String,
  notes: [{ date: String, result: String }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Customer', CustomerSchema);
