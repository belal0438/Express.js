const path =  require('path')

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes  = require('./routes/shop');
const contactUs = require('./routes/contact')
const succesUs = require('./routes/succes')

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactUs);
app.use(succesUs);

app.use((req,res,next)=>{
    res.sendfile(path.join(__dirname,'views','404.html'))
})

app.listen(8000);


