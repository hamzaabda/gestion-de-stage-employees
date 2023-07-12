const express = require('express');

const manageetudiant = require('../controllers/etudiant.controller');
const { authenticateJWT} = require('../middeleware/auth');

const router = new express.Router();



router.post('/registeretdudiant',authenticateJWT,manageetudiant.registeretdudiant);


router.get('/getetudiantById/:id', authenticateJWT,manageetudiant.getetudiantById);


router.get('/getManystudent',authenticateJWT, manageetudiant.getManystudent);


router.delete('/deleteStudentById/:id', authenticateJWT,manageetudiant. deleteStudentById);


router.post('/updateStudentById/:id', authenticateJWT,manageetudiant.updateStudentById);

router.post ('/assignStage/:studentId/stage', manageetudiant.assignStage)




module.exports = router;


