const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        gender: String
        email: String
        phoneNumber: Int
        address: String
        waiver: String
        membership: String
    }
    type Auth {
        token: ID
        user: User
    }
    type Query {
        user: User
    }
    type Mutation {
        addUser(firstName; String!, lastName: String!, email: String!, phoneNumber: Int!, password: String!, address: String!, waiver: String!, membership: String!): Auth
        updateUser(firstName; String, lastName: String, email: String, phoneNumber: Int, password: String, address: String, membership: Strings): User
        login(email: String!, password: String!): Auth 
    }
`;

module.exports = typeDefs;
