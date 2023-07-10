const express = require('express');
const app = express();
const morgan = require('morgan');
const productRoutes = require('./api/routes/products.js')
const orderRoutes = require('./api/routes/order.js')
const bodyParser = require('body-parser')
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//     const err = new Error();
//     if(err)
//     {
//        next()
//     }
// })

 app.use((req, res, next) => {
     res.header('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
     if(req.method==='OPTION'){
         res.header('Access-Control-Allow-Method', 'PUT', 'POST', 'DELETE', 'PATCH', 'GET');
         return res.status(200).json({}); 
     }
     next();
 })
app.use('/products', productRoutes);
app.use('/order', orderRoutes);

app.use((req, res, next) => {
    const error = new Error('not found');
    error.status=404;
    next(error);
})

app.use((error,req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error : {
            message:error.message
        }
    })
    
})



module.exports = app;