const jobData = require('../model/jobBookingSchema');
const DB = process.env.DATABASE
const mongoose = require('mongoose');
// const ObjectId = mongoose.Types.ObjectId; 



exports.submitFormData = async (req, res) => {
  try {  
    const formData = req.body;
    const savedForm = await jobData.create(formData);
    res.status(201).json({ message: 'Form data saved successfully', data: savedForm });
     } 
  catch (error)
   {
    res.status(500).json({ message: 'Error saving form data', error: error.message });
  }
};





exports.allJobData = async (req, res) => {
    try {
      const allJobs = await jobData.find({}); // Fetch all members
      if (allJobs.length > 0) {
        res.status(200).json(allJobs); // Send all members' data as JSON response
      } else {
        res.status(404).json("No members found"); // If there are no members in the database
      }
    } catch (err) {
      res.status(500).json({ error: err.message }); // Handle any errors that occur during the database operation
    }
  };
  

  exports.deleteJobById = async (req, res) => {
    try {
      const jobId = req.params.id; // Assuming the ID of the job to delete is passed as a parameter
      const deletedJob = await jobData.findByIdAndDelete(jobId);
      
      if (deletedJob) {
        res.status(200).json({ message: 'Job deleted successfully', deletedJob });
      } else {
        res.status(404).json({ message: 'Job not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting job', error: error.message });
    }
  };
  