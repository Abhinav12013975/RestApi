const express = require('express')
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message:'work done'
    })
})

router.post('/', (req, res, next)=>{
    const product = {
        name : req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message:'handling post request',
        createdProduct: product
    })
});

router.get('/:productId', (req, res, next)=>{
    const id = req.params.productId;
    if(id === 'special')
    {
        res.status(200).json({
            message:'handling GET request',
            id:id
    })
    }

    else{
        res.status(200).json({
            message:"handling productid"
        })
    }
         
})

router.patch('/:productId', (req, res, next)=>{
    res.status(200).json({
        message:'handling patch request',
    })
         
})

router.delete('/:productId', (req, res, next)=>{
    res.status(200).json({
        message:'handling delete request',
    })
         
})

module.exports = router;