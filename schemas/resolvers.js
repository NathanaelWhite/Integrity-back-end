const { AuthenticationError } = require('apollo-server-express');
const { User, Membership } = require('../models');
// require auth.js
// require stripe example

const resolvers = {
    Query: {
       memberships: async () => {
           return await Membership.find();
       },
    }
};

module.exports = resolvers;

