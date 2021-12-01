const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Membership {
        _id: ID
        memType: String
        description: String
        price: Float
    }
    type Subscription {
        _id: ID
        purchaseDate: String
        membership: [Membership]
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
    type Auth {
        token: ID
        user: User
    }
    type Checkout {
        session: ID
    }
    type Query {
        memberships(memType: String): [Membership]
        membership(_id: ID!): Membership
        user: User
        subscription(_id: ID!): Subscription
        checkout(memberships: [ID]!): Checkout
    }
    type Mutation {
        addUser(firstName: String!, lastName: String!, gender: String!, email: String!, phoneNumber: String! password: String!, birthday: String!, address: String!, waiver: String!): Auth
        addSubscription(membership: [ID]!): Subscription
        updateUser(firstName: String!, lastName: String!, gender: String!, email: String!, phoneNumber: String! password: String!, birthday: String!, address: String!, waiver: String!): User
        updateMembership(_id: ID!, memType: String!): Membership
        login(email: String!, password: String!): Auth  
    }
`;

module.exports = typeDefs;
