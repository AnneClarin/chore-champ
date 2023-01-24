const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;

const choreSchema = new Schema({
  name: { type: String, required: true },
  frequency: {type: Number, required: true },
  duration: { type: Number, required: true },
  completed: { type: Boolean, default: false}
}, {
  timestamps: true
});

module.exports = mongoose.model('Chore', choreSchema);