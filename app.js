
// const express = require('express');
// const app = express();

// app.use('/add-product', (req, res, next) => {
//     console.log('In the another middleware')
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>')
// })

// app.use('/product', (req, res, next) => {
//     console.log(req.body); //undefined because we have to parse our incomming body
//     res.redirect('/')
// });

// app.use('/', (req, res, next) => {
//     console.log('In the another middleware')
//     res.send('<h1>Hello from Express!</h1>')
// })
// app.listen(8000);

















const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title" placeholder="Add-Product"><input type="number" name="title" placeholder="size"><button type="submit">Add product</button></form>')
})

// app.use('/product', (req, res, next) => {  ///we can also use app.get() or app.post() instead of app.use

//     console.log(req.body);
//     res.redirect('/')
// });



app.post('/product', (req, res, next) => { 
    console.log(req.body);
    res.redirect('/')
});


app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>')
})

app.listen(8000);


