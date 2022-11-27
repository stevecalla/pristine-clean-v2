const { gql } = require("apollo-server-express");

const typeDefs = gql`
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

  type Query {
    users: [User]!
    user(email: String!): User
    books(username: String): [Book]
    me(_id: ID!): User
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