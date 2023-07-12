const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const noteSchema = new Schema({
    etudiant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Etudiant',
    },
    score: Number,
    rang: Number,
    accepte: false
  });



const Note = mongoose.model('note',noteSchema);
module.exports = Note;
