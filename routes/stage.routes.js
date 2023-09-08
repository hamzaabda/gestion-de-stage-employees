const express = require('express');


const stageController = require ('../controllers/stage');
const { authenticateJWT} = require('../middeleware/auth');

const router = new express.Router();





router.post('/registerstage',authenticateJWT, stageController.registerstage);





router.get('/stages/:id', stageController.getStageById);


router.get('/getManystage',authenticateJWT, stageController.getManystage);



router.delete('/deletestages/:id', stageController.deleteStageById);


router.post('/updatestages/:id', stageController.updateStageById);

router.put('/choisirStage/:stageId/choisir', stageController.choisirStage);




router.post('/users',(req,res)=>{
    res.send("home page")
})
module.exports = router;


