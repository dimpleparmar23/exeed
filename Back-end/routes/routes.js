const express=require('express');
const Admin=require ('../controller/Admin');
const{cc,ab}=require('../controller/control');
 
const router =express.Router();
router.post('/Jobpost',cc)
router.post('/Admin/login')

// Read all
router.get('/Jobpost',ab)
module.exports=router;