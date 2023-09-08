const express = require('express');


const jobController = require ('../controllers/job.controller');
const { authenticateJWT} = require('../middeleware/auth');

const router = new express.Router();





router.post('/registerjob',authenticateJWT, jobController.registerjob);





router.get('/job/:id', jobController.getJobById);


router.get('/getManyjob',authenticateJWT, jobController.getManyjob);



router.delete('/deletejob/:id', jobController.deleteStageById);


router.post('/updatejob/:id', jobController.updatejobById);



router.get('/search', jobController.advancedSearchJobs); // Route pour la recherche avancée



router.post('/users',(req,res)=>{
    res.send()
})
module.exports = router;


