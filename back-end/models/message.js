const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  userId: { type: String, required: true },
  text : {type: String, required: true},
  timestamp: {type: Date, default: Date.now()},
});

module.exports = mongoose.model('Message', messageSchema);