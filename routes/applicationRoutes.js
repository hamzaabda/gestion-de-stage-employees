// applicationRoutes.js
const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');

// Route pour soumettre une candidature

router.post('/apply/:jobId', applicationController.submitApplication);
router.post('/users',(req,res)=>{
    res.send()
})
module.exports = router;
