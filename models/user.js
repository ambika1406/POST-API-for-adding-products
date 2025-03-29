const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    fatherName: { type: String, required: true },
    dob: { type: Date, required: true },
    branch: { type: String, required: true },
    rollNo: { type: String, unique: true, required: true },
    section: { type: String, required: true },
    address: { type: String, required: true },
    mobileNo: { type: String, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
