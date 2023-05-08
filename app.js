
const express = require('express');

const app = express();

// app.use((req,res,next)=>{
//     console.log('In the middleware')
//     next(); // allows the request to continue to the next middleware in line
// }) // use allowes us to use new middlewares functions 

// app.use((req,res,next)=>{
//     console.log('In the another middleware')
// })

// app.listen(8000);










app.use((req,res,next)=>{
    console.log('In the middleware')
    next();
}) 

app.use((req,res,next)=>{
    console.log('In the another middleware')
    res.send('<h1>Hello from Express!</h1>')  ///// content-Type: text/html;
})

// app.use((req,res,next)=>{

//     res.send( { key1: "value"})     /////content-Type:	json
// })




app.listen(8000);