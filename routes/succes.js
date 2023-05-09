const path = require('path');

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router();

//  /admin/add-product => GET
router.get('/succes', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','succes.html'))
})
 


//  /admin/add-product => POST
router.post('/contact', (req, res, next) => { 
    // console.log(req.body);
    res.redirect('/succes')
});

module.exports = router