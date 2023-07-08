const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  major: {
    type: String,
    required: true
  },
  stage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stage'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Student', studentSchema);

