const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Ensure this model exists

const router = express.Router();

// Signin API
router.post('/', async (req, res) => {
    try {
        const user = await User.findOne({ rollNo: req.body.rollNo });
        if (!user) return res.status(400).send({ message: 'User not found' });

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) return res.status(400).send({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
        res.send({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
