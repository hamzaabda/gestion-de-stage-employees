const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true }, // Référence à l'offre d'emploi à laquelle le candidat postule
  candidateName: { type: String, required: true },
  candidateEmail: { type: String, required: true },
  resume: { type: String, required: true }, // Stockez le CV du candidat (peut être un lien vers un fichier)
  coverLetter: { type: String }, // Optionnelle : Lettre de motivation
  appliedAt: { type: Date, default: Date.now },
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
