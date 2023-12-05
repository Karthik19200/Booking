const express = require('express');
const router = express.Router();
const jobBookingController= require('../Controller/jobBookingController');

router.post('/submit', jobBookingController.submitFormData);

router.get('/jobData', jobBookingController.allJobData);

module.exports = router;

