const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true },
    discount: { type: Number, required: true },
    offerprice: { type: Number, required: true },
    reviews: { type: [String], default: [] }
});

module.exports = mongoose.model('Product', productSchema);
