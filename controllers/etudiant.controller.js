const Student = require('../models/etudiant.model');
const Stage = require('../models/stage.model');
const mongoose = require('mongoose');
const {SECRET_KEY}=require('./../config');
const user = require('../models/user');



exports.registeretdudiant = async (req,res) => {
    const {name,age,major,stage,createdAt}=req.body;

    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: "Accès refusé. Seuls les administrateurs peuvent ajouter des stages." });
    }
    const newUser = new Student({name,age,major,stage,createdAt});
    await newUser.save();
    res.status(200).json({message:'success'});
};

exports.getetudiantById = async function (req, res, next) {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(404).send('Invalid stage ID');
      }
  
      const stage = await Student.findById(mongoose.Types.ObjectId(req.params.id));
      if (stage) {
        res.status(200).send(stage);
      } else {
        res.status(404).send('etudiant not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

exports.getManystudent = async function (req, res,next) {
    try {
        const limit = req.query.limit ? +req.query.limit : undefined;
        const events = await Student.find().limit(limit).sort({createdAt: 'desc'});
        res.status(200).send(events);
    } catch (error) {
        res.status(400).send();
    }
}

exports.deletestudent = async function (req, res,next) {
    try {
        const deletestage  = await Student.findByIdAndDelete(req.params.id);
        deletestage  ? res.status(200).send() : res.status(404).send();
    } catch (error) {
        res.status(400).send();
    }
}

exports.deleteStudentById = async function (req, res, next) {
    try {
      const deletedStage = await Student.findByIdAndDelete(req.params.id);
  
      if (deletedStage) {
        res.status(200).send('Student deleted successfully');
      } else {
        res.status(404).send('Student not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  
  exports.updateStudentById = async function (req, res, next) {
    try {
      const updatedStage = await Student.findOneAndUpdate(
        { _id: req.params.id }, // Filtre par l'ID du stage
        req.body, // Les mises à jour à appliquer
        { new: true, runValidators: true } // Options
      );
  
      if (updatedStage) {
        res.status(200).send(updatedStage);
      } else {
        res.status(404).send('Student not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  exports.assignStage = async (req, res) => {
    const { studentId } = req.params;
    const { name, description, startDate, endDate } = req.body;
  
    try {
      const student = await Student.findById(studentId);
      if (!student) {
        return res.status(404).json({ error: 'Étudiant introuvable' });
      }
  
      const stage = new Stage({
        name,
        description,
        startDate,
        endDate
      });
      await stage.save();
  
      student.stage = stage._id;
      await student.save();
  
      res.json(student);
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de l\'affectation du stage à l\'étudiant' });
    }
  };