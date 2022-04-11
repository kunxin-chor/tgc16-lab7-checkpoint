const express = require('express');

// import in the Product model
const {Product} = require('../models')

// create the new router
const router = express.Router();

router.get('/', async (req,res)=>{
    // fetch all the products
    // The NAME of the MODEL always refer
    // to the entire table
    let products = await Product.collection().fetch();
    res.render('products/index',{
        'products':products.toJSON() // convert the results to JSON
    })
  
})

module.exports = router;