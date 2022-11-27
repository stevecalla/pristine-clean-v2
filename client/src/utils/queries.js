import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me($id: ID!) {
    me(_id: $id) {
      _id
      username
      email
      bookCount
      savedBooks {
        _id
        bookId
        authors
        description
        image
        title
        infoLink
        previewLink
        publishedDate
      }
    }
  }
`;
