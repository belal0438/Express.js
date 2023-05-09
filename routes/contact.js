

const express = require('express');

const impGetcontact = require('../controllers/contacts')
const impPostcontact = require('../controllers/contacts')

const router = express.Router();

//  /admin/add-product => GET
router.get('/contact',impGetcontact.getContact)
 
//  /admin/add-product => POST
router.post('/contact',impPostcontact.postContact);

module.exports = router