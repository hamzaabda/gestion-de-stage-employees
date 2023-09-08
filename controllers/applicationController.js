// applicationController.js
const Application = require('../models/application.model');

// Fonction pour soumettre une candidature
exports.submitApplication = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { candidateName, candidateEmail, resume, coverLetter } = req.body;

    // Créez une nouvelle candidature
    const application = new Application({
      job: jobId,
      candidateName,
      candidateEmail,
      resume,
      coverLetter,
    });

    // Enregistrez la candidature dans la base de données
    await application.save();

    res.status(201).json({ message: 'Candidature soumise avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la soumission de la candidature' });
  }
};
