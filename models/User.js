const { Schema, Mongoose } = require("mongoose");
const bcrypt = require("bcrypt");

const statesArray = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DC",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

const userSchema = new Schema({
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
    match: [/.+@.+\..+/, "Must use a valid email address"],
  },
  phoneNumber: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  birthday: {
    type: Date,
  },
  address: {
    street: String,
    city: String,
    state: {
      type: String,
      uppercase: true,
      required: true,
      enum: statesArr,
    },
    zip: Number,
  },
  waiver: {
    type: Boolean,
    required: true,
  },
});

const User = Mongoose.model('User', userSchema);

module.exports = User;
