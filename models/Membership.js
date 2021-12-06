const mongoose = require('mongoose');
const { Schema } = mongoose

const membershipSchema = new Schema({
    memType: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true,
    },
});

const Membership = mongoose.model('Membership', membershipSchema);

module.exports = Membership;