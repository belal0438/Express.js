const path = require('path');
const rootDir = require('../util/path');

exports.getSucess =  (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','succes.html'))
}


exports.PostSucess =  (req, res, next) => { 
    // console.log(req.body);
    res.redirect('/succes')
}