const jobPost = require('../models/jobPost');
const cc=async (req, res) => {
 try {
     const { companyName, companyDescription, ctc, eligibilityCriteria, registrationTime } = req.body;
     const newCompany = new jobPost({ companyName, companyDescription, ctc, eligibilityCriteria, registrationTime });
     await newCompany.save();
     res.status(201).json(newCompany);
 } catch (error) {
     console.error('Error creating company:', error);
     res.status(500).json({ message: 'Server error' });
 }
};
const ab=async (req, res) => {
 try {
     const companies = await jobPost.find(); 
     res.json(companies);
 } catch (error) {
     console.error('Error fetching companies:', error);
     res.status(500).json({ message: 'Server error' });
 }
}
module.exports={cc,ab}
// createSures.findOne{Username:}
// if (Us=== admin)
// {
 
// }