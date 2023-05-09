

const express = require('express');

const imGetSucess = require('../controllers/sucess');
const imPostSucess = require('../controllers/sucess');

const router = express.Router();

//  /admin/add-product => GET
router.get('/succes',imGetSucess.getSucess);
 
//  /admin/add-product => POST
router.post('/contact',imPostSucess.PostSucess);

module.exports = router