const { Schema, model } = require('mongoose');

const Mail = new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String
    },
    receiverAddress: {
        type: String,
        required: true,
    },
    receiverCity: {
        type: String,
        required: true,
    },
    deliverDate: {
        type: Date,
        required: true,
    },
    receiverPhone: {
        type: String,
        required: true,
    },
    deliveryReport: Boolean,
    agreement: {
        type: Boolean,
        default: true,
    },
    servicePrice: {
        type: Number,
    },
    status: {
        type: String,
        enum: [
            'NEW',
            'PROCESSING',
            'RECEIVING', 
            'KEEPING',
            'DELIVERED',
            'CANCELED',
        ],
        default: 'NEW'
    },
    canceled: {
        type: Boolean,
        default: false,
    },
    note: String
}, {
    timestamps: true
});

module.exports = model('Mail', Mail);