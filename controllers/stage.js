const Stage = require('../models/stage.model');

const mongoose = require('mongoose');
const {SECRET_KEY}=require('./../config');
const user = require('../models/user');

exports.registerstage = async (req,res) => {
    const {name,description,startdate,enddate}=req.body;

    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: "Accès refusé. Seuls les administrateurs peuvent ajouter des stages." });
    }
    const newUser = new Stage({name,description,startdate,enddate});
    await newUser.save();
    res.status(200).json({message:'success'});
};

exports.getStageById = async function (req, res, next) {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(404).send('Invalid stage ID');
      }
  
      const stage = await Stage.findById(mongoose.Types.ObjectId(req.params.id));
      if (stage) {
        res.status(200).send(stage);
      } else {
        res.status(404).send('Stage not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

exports.getManystage = async function (req, res,next) {
    try {
        const limit = req.query.limit ? +req.query.limit : undefined;
        const events = await Stage.find().limit(limit).sort({createdAt: 'desc'});
        res.status(200).send(events);
    } catch (error) {
        res.status(400).send();
    }
}

exports.deletestage = async function (req, res,next) {
    try {
        const deletestage  = await User.findByIdAndDelete(req.params.id);
        deletestage  ? res.status(200).send() : res.status(404).send();
    } catch (error) {
        res.status(400).send();
    }
}

exports.deleteStageById = async function (req, res, next) {
    try {
      const deletedStage = await Stage.findByIdAndDelete(req.params.id);
  
      if (deletedStage) {
        res.status(200).send('Stage deleted successfully');
      } else {
        res.status(404).send('Stage not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  
  exports.updateStageById = async function (req, res, next) {
    try {
      const updatedStage = await Stage.findOneAndUpdate(
        { _id: req.params.id }, // Filtre par l'ID du stage
        req.body, // Les mises à jour à appliquer
        { new: true, runValidators: true } // Options
      );
  
      if (updatedStage) {
        res.status(200).send(updatedStage);
      } else {
        res.status(404).send('Stage not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  
  
  exports.choisirStage = async (req, res) => {
    try {
      const stage = await Stage.findById(req.params.stageId);
  
      if (!stage) {
        return res.status(404).json({ error: 'Stage non trouvé' });
      }
  
      if (stage.etudiant) {
        return res.status(400).json({ error: 'Le stage est déjà choisi par un étudiant' });
      }
  
      stage.etudiant = req.body.etudiantId;
      await stage.save();
  
      res.status(200).json(stage);
    } catch (error) {
      res.status(500).json({ error: 'Une erreur est survenue lors du choix du stage' });
    }
  };  
  
  
  