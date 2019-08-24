const mongoose = require('mongoose')

const { Schema } = mongoose

module.exports = new Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['sedan', 'suv', 'van', 'coupe', 'cabrio', 'roadster', 'truck'],
        default: 'sedan'
    },
    color: {
        type: String,
        required: true
    },
    electric: {
        type: Boolean,
        required: true,
        default: false
    },

    owner: [{ type: ObjectId, ref: 'User' }]
})