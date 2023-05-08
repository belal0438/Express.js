const express = require('express');

const router = express.Router();

//  /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" placeholder="Add-Product"><input type="number" name="title" placeholder="size"><button type="submit">Add product</button></form>')
})
 
///   /add-product these same cane be used because POST,GET both are diffrent routes

//  /admin/add-product => POST
router.post('/add-product', (req, res, next) => { 
    console.log(req.body);
    res.redirect('/')
});


module.exports = router;
