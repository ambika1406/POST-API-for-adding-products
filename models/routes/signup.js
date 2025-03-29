const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/user'); // Ensure this model exists

const router = express.Router();

// Signup API
router.post('/', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({ ...req.body, password: hashedPassword });
        await user.save();
        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
