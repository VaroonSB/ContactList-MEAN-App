const mongoose = require('mongoose');

const contact = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
  phone: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Contact', contact); 