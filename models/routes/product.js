const express = require('express');
const Product = require('../models/product'); // Ensure this model exists

const router = express.Router();

// POST API to add a product
router.post('/', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});

// GET API to retrieve all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;

