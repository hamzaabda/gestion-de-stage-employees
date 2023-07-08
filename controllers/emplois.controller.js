const Emploi = require('../models/emplois.model');
const mongoose = require('mongoose');

exports.registeremplois = async (req,res) => {
  const {titre,description,lieu,entreprise,salaire,datePublication}=req.body;

  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: "Accès refusé. Seuls les administrateurs peuvent ajouter des emplois." });
  }
  const newUser = new Emploi({titre,description,lieu,entreprise,salaire,datePublication});
  await newUser.save();
  res.status(200).json({message:'success'});
};

exports.getemploisById = async function (req, res, next) {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).send('Invalid emploi ID');
    }

    const emploi = await Emploi.findById(mongoose.Types.ObjectId(req.params.id));
    if (emploi) {
      res.status(200).send(emploi);
    } else {
      res.status(404).send('emploi not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getManyemploi = async function (req, res,next) {
  try {
      const limit = req.query.limit ? +req.query.limit : undefined;
      const events = await Emploi.find().limit(limit).sort({createdAt: 'desc'});
      res.status(200).send(events);
  } catch (error) {
      res.status(400).send();
  }
}



exports.deleteStageById = async function (req, res, next) {
  try {
    const deletedemploi = await Emploi.findByIdAndDelete(req.params.id);

    if (deletedemploi) {
      res.status(200).send('emplois deleted successfully');
    } else {
      res.status(404).send('emplois not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};


exports.updateStageById = async function (req, res, next) {
  try {
    const updatedemplois = await Emploi.findOneAndUpdate(
      { _id: req.params.id }, // Filtre par l'ID du stage
      req.body, // Les mises à jour à appliquer
      { new: true, runValidators: true } // Options
    );

    if (updatedemplois) {
      res.status(200).send(updatedemplois);
    } else {
      res.status(404).send('emplois not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};




















