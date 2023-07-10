const express = require('express');
const router = express.Router();


router.get('/', (req,res,next)=>{
res.status(200).json({
    message:'ordered fetched'
})
});

router.post('/', (req,res,next)=>{
  
const order = {
    productId : req.body.productId,
    quantity: req.body.quantity
}
    res.status(201).json({
        message:'ordered created',
        order: order
    })
    });

 router.get('/:orderId', (req,res,next)=>{
     res.status(200).json({
         message:'ordered created',
         orderId : req.params.orderId
    })
});

router.delete('/:orderId', (req,res,next)=>{
    if(req.params.orderId==123)
    {
        res.status(200).json({
            message:'ordered deleted',
            
       })
    }
});

module.exports = router;