const Job = require('../models/job.model');

const mongoose = require('mongoose');
const {SECRET_KEY}=require('../config');
const user = require('../models/user');

exports.registerjob = async (req,res) => {
    const {title,company,description,location,createdAt}=req.body;

    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: "Accès refusé. Seuls les administrateurs peuvent ajouter des stages." });
    }
    const newUser = new Job({title,company,description,location,createdAt});
    await newUser.save();
    res.status(200).json({message:'success'});
};

exports.getJobById = async function (req, res, next) {
    try {
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(404).send('Invalid job ID');
      }
  
      const job = await Job.findById(mongoose.Types.ObjectId(req.params.id));
      if (job) {
        res.status(200).send(job);
      } else {
        res.status(404).send('job not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

exports.getManyjob = async function (req, res,next) {
    try {
        const limit = req.query.limit ? +req.query.limit : undefined;
        const events = await Job.find().limit(limit).sort({createdAt: 'desc'});
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
      const deletedStage = await Job.findByIdAndDelete(req.params.id);
  
      if (deletedStage) {
        res.status(200).send('Stage deleted successfully');
      } else {
        res.status(404).send('Stage not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  };

  
  exports.updatejobById = async function (req, res, next) {
    try {
      const updatedjob = await Job.findOneAndUpdate(
        { _id: req.params.id }, // Filtre par l'ID du stage
        req.body, // Les mises à jour à appliquer
        { new: true, runValidators: true } // Options
      );
  
      if (updatedjob) {
        res.status(200).send(updatedjob);
      } else {
        res.status(404).send('job not found');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  

  exports.advancedSearchJobs = async (req, res) => {
    try {
      const { title, company, description, location } = req.query;
      const query = {};
  
      if (title) {
        query.title = { $regex: title, $options: 'i' };
      }
  
      if (company) {
        query.company = { $regex: company, $options: 'i' };
      }
  
      if (description) {
        query.description = { $regex: description, $options: 'i' };
      }
  
      if (location) {
        query.location = { $regex: location, $options: 'i' };
      }
  
      const jobs = await Job.find(query);
      res.status(200).json(jobs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  
  
 
  
    