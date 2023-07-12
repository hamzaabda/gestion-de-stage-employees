const Note = require('../models/note.model');
const Student = require('../models/etudiant.model');
const Stage = require('../models/stage.model');
const mongoose = require('mongoose');
const {SECRET_KEY}=require('./../config');
const user = require('../models/user');

exports.calculerScoreEtRang = async (req, res) => {
  try {
    const { nom, note } = req.body;
    const score = note * 10;

    const etudiant = new Student({ nom });
    await etudiant.save();

    const noteEtudiant = new Note({
      etudiant: etudiant._id,
      score,
      rang: -1,
      accepte: false, // Par défaut, le candidat est refusé
    });
    await noteEtudiant.save();

    // Filtrer et accepter uniquement les étudiants ayant une note supérieure à 15
    const etudiantsAcceptes = await Note.find({ score: { $gt: 150 } }).sort({ score: -1 }).limit(5);

    const estAccepte = score > 150 && etudiantsAcceptes.length < 5;
    noteEtudiant.accepte = estAccepte; // Mettre à jour l'état d'acceptation dans la note de l'étudiant
    await noteEtudiant.save();

    res.json({ score, estAccepte });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erreur lors de l\'enregistrement de l\'étudiant' });
  }
};


  // Fonction pour afficher la liste des étudiants avec leurs scores
  exports.listeScoresEtudiants = async (req, res) => {
    try {
      // Fetch the list of scores from the Note model
      const listeNotes = await Note.find({}, 'score');
  
      res.json(listeNotes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur lors de la récupération de la liste des scores des étudiants' });
    }
  };
  