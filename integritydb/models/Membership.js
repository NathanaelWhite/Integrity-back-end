const mongoose = require('mongoose');
const { Schema } = mongoose

const membershipSchema = new Schema({
    memType: {
        type: String,
        required: true,
    },
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    price: {
        type: Number,
        required: true,
        min: 0.99
    },
});

const Membership = mongoose.model('Membership', membershipSchema);

module.exports = Membership;