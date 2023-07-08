const express = require('express');

const manageresult = require('../controllers/emplois.controller');
const { authenticateJWT} = require('../middeleware/auth');

const router = new express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/resultat');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '') + file.originalname);
    }
});

const upload = multer({ storage: storage });


router.post('/registeremplois', authenticateJWT, manageresult.registeremplois);


router.get('/getemploisById/:id', authenticateJWT,manageresult.getemploisById);


router.get('/getManyemploi',authenticateJWT, manageresult.getManyemploi);


router.delete('/deleteStageById/:id', authenticateJWT,manageresult.deleteStageById);


router.post('/updateStageById/:id', authenticateJWT,manageresult.updateStageById);

module.exports = router;


