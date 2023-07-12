const express = require('express');
const { authenticateJWT} = require('../middeleware/auth');
const manageEventsController = require('../controllers/note.controller');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/events');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '') + file.originalname);
    }
});

const upload = multer({ storage: storage });

const router = new express.Router();

// Add a coming event
router.post('/calculer-score', manageEventsController.calculerScoreEtRang);
router.get('/scores', manageEventsController.listeScoresEtudiants);




module.exports = router;
