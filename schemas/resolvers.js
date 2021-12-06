const { AuthenticationError } = require('apollo-server-express');
const { User, Membership } = require('../models');
// require auth.js
// require stripe example

const resolvers = {
    Query: {
        helloWorld: () => {
            return 'hello world';
        }
    }
};

module.exports = resolvers;

