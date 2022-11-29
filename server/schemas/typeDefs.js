const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # type Booking {
  #   _id: ID!
  #   event: Event!
  #   user: User!
  #   createdAt: String!
  #   updatedAt: String!
  # }
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String
    createdEvents: [Event]!
  }
  type Auth {
    user: User
    token: ID!
    tokenExpiration: Int!
  }
  type Event {
    _id: ID!
    title: String
    description: String
    date: String
    creator: String
  }
  input EventInput {
    title: String!
    description: String!
    date: String!
    creator: String!
  }
  input UserInput {
    email: String!
    password: String!
  }
  type Query {
    events: [Event]
    event(eventId: ID!): Event
    userEvents(username: String!): [Event]
    # bookings: [Booking!]!
    # user(username: String!): User
    me: User
    users: [User]
  }
  type Mutation {
    # createUser(input: UserInput): User
    # createUser(username: String!, email: String!, password: String!): User
    # createEvent(eventInput: EventInput): Event
    # bookEvent(eventId: ID!): Booking!
    # cancelBooking(bookingId: ID!): Event!
    createUser(username: String!, email: String!, password: String!): Auth
    createEvent(
      title: String!
      description: String!
      date: String!
      creator: String!
    ): Event
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
