const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const stageSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },
  
  startdate: {
    type: Date,

},
enddate: {
    type: Date,
}


});

// Create a model using the schema
const Event = mongoose.model('stage',stageSchema);
module.exports = Event;
