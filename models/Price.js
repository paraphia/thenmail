const { Schema, model } = require('mongoose');

const Price = new Schema({
    year: Number, 
    extension: Number,
    city: String,
}, {
    timestamps: true,
});

module.exports = model('Price', Price);