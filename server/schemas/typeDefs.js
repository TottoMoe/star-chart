const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Booking {
    _id: ID!
    event: Event!
    user: User!
    createdAt: String!
    updatedAt: String!
  }
  type Event {
    _id: ID!
    title: String!
    description: String!
    date: String!
    creator: User!
  }
  type User {
    _id: ID!
    email: String!
    password: String
    createdEvents: [Event!]
  }
  type Auth {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }
  input EventInput {
    title: String!
    description: String!
    date: String!
  }
  input UserInput {
    email: String!
    password: String!
  }
  type Query {
    events: [Event!]!
    bookings: [Booking!]!
  }
  type Mutation {
    createEvent(eventInput: EventInput): Event
    createUser(userInput: UserInput): User
    login(email: String!, password: String!): Auth
    bookEvent(eventId: ID!): Booking!
    cancelBooking(bookingId: ID!): Event!
  }
`;

module.exports = typeDefs;
