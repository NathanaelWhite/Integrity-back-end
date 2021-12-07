const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Membership {
        _id: ID
        memType: String
        description: String
        price: Float
    }
    type Query {
        memberships(memType: String): [Membership]
        membership(_id: ID!): Membership
    }
    type User {
        _id: ID
        firstName: String
        lastName: String
        gender: String
        email: String
        phoneNumber: String
        birthday: String
        address: String
        membership: [Membership]
    }
`;

module.exports = typeDefs;


