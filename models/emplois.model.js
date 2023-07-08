const mongoose = require('mongoose');

// Définition du schéma de l'emploi
const emploiSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  lieu: {
    type: String,
    required: true
  },
  entreprise: {
    type: String,
    required: true
  },
  salaire: {
    type: Number,
    required: true
  },
  datePublication: {
    type: Date,
    default: Date.now
  }
});


const Emploi = mongoose.model('Emploi', emploiSchema);

module.exports = Emploi;
