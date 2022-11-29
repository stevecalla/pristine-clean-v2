import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook(
    $id: ID!
    $bookId: ID!
    $authors: [String]
    $description: String
    $image: String
    $title: String
    $infoLink: String
    $previewLink: String
    $publishedDate: String
  ) {
    addBook(
      _id: $id
      bookId: $bookId
      authors: $authors
      description: $description
      image: $image
      title: $title
      infoLink: $infoLink
      previewLink: $previewLink
      publishedDate: $publishedDate
    ) {
      _id
      savedBooks {
        _id
        bookId
        title
        authors
        description
        image
        infoLink
        previewLink
        publishedDate
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($id: ID!, $bookId: ID!) {
    removeBook(_id: $id, bookId: $bookId) {
      _id
      savedBooks {
        _id
        bookId
        title
        authors
        description
        image
        infoLink
        previewLink
        publishedDate
      }
    }
  }
`;
