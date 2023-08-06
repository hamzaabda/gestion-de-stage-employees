const express = require('express');

const manageetudiant = require('../controllers/etudiant.controller');
const { authenticateJWT} = require('../middeleware/auth');

const router = new express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/stage');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '') + file.originalname);
    }
});

const upload = multer({ storage: storage });

router.post('/registeretdudiant',authenticateJWT,manageetudiant.registeretdudiant);


router.get('/getetudiantById/:id', authenticateJWT,manageetudiant.getetudiantById);


router.get('/getManystudent',authenticateJWT, manageetudiant.getManystudent);


router.delete('/deleteStudentById/:id', authenticateJWT,manageetudiant. deleteStudentById);


router.post('/updateStudentById/:id', authenticateJWT,manageetudiant.updateStudentById);

router.post ('/assignStage/:studentId/stage', upload.single('file'), manageetudiant.assignStage)





module.exports = router;


