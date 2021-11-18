const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
       firstName: {
           type: String,
           required: true,
       },
       lastName: {
           type: String,
           required: true,
       },
       gender: {
           type: Boolean,
           required: true,
       },
       email: {
           type: String,
           required: true,
           unique: true,
           match: [/.+@.+\..+/, 'Must use a valid email address'],
       },
       phoneNumber: {
           type: String,
       }

    }
)