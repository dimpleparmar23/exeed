const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
 
  companyName: {
   type: String,
   required:true
  },
  companyDescription: {
   type: String,
   
  },
  ctc: {
   type: String,
  
  },
  eligibilityCriteria: {
   type: String,
   
  },
  
  registrationTime: {
   type: String,
   
  }
});

const jobPost = mongoose.model('Company', companySchema);

module.exports = jobPost;