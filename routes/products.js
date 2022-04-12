const express = require('express');

// import in the Product model
const {Product, Brand} = require('../models')

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

router.get('/brands', async (req,res)=>{
    let brands = await Brand.collection().fetch();
    res.render('products/brands', {
        'brands': brands.toJSON()
    })
})

module.exports = router;