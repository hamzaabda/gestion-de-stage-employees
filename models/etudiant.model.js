const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    
  },
  email: {
    type: String,
    
  },
  cin: {
    type: Number,
    
  },
  stage: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Stage'
  },
  
  
});

module.exports = mongoose.model('Student', studentSchema);

