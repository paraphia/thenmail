const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const User = new Schema({
    username: String,
    firstName: String,
    lastName: String,
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: [
            'USER',
            'ADMIN',
            'MANAGER'
        ],
        default: 'USER'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', User);