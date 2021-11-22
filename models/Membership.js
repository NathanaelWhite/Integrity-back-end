const { Schema, Mongoose } = require('mongoose');

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

const Membership = Mongoose.model('Membership', membershipSchema);

module.exports = Membership;