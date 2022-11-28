const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Employee {
    _id: ID
    firstName: String
    lastName: String
    cell: String
    email: String
    isManager: Boolean
    availability: [Availability]
    schedule: [Schedule]
  }

  type Schedule {
    _id: ID
  }

  type Availability {
    _id: ID
    mondayAm: Boolean
    mondayPm: Boolean
    tuesdayAm: Boolean
    tuesdayPm: Boolean
    wednesdayAm: Boolean
    wednesdayPm: Boolean
    thursdayAm: Boolean
    thursdayPm: Boolean
    fridayAm: Boolean
    fridayPm: Boolean
    saturdayAm: Boolean
    saturdayPm: Boolean
    sundayAm: Boolean
    sundayPm: Boolean
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
    bookCount: String
  }

  type Book {
    _id: ID
    bookId: String
    authors: [String]
    description: String
    image: String
    title: String
    infoLink: String
    previewLink: String
    publishedDate: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
  }

  type Location {
    _id: ID
    locationId: String
    businessName: String
    address: String
  }

  type Query {
    users: [User]!
    user(email: String!): User
    books(username: String): [Book]
    me(_id: ID!): User

    thoughts: [Thought]!
    thought(thoughtId: ID!): Thought

    locations: [Location]!
    location(locationId: ID!): Location
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(
      _id: ID!
      bookId: ID!
      authors: [String]
      description: String
      image: String
      title: String
      infoLink: String
      previewLink: String
      publishedDate: String
    ): User
    removeBook(_id: ID!, bookId: ID!): User
  }
`;

module.exports = typeDefs;
