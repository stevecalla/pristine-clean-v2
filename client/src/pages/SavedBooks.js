import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import BookList from "../components/BookListSaved";
import { getUserId } from "../utils/getUserId"; //get user id from jwt token
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { REMOVE_BOOK } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { removeBookId } from "../utils/localStorage";
import Auth from "../utils/auth";

const SavedBooks = () => {
  // get userId from jwt token to use in query/mutation
  let userId = getUserId();

  // setup remove book graphql mutation
  const [removeBook] = useMutation(REMOVE_BOOK);

  let savedBooks = [];
  // get all user saved book info to render to page
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { id: userId }, 
    // if skip is true, this query will not be executed; in this instance, if the user is not logged in this query will be skipped when the component mounts
    skip: !Auth.loggedIn(), 
  });

  // using loading paramater to wait for response from useQuery QUERY_ME
  if (loading) {
    return <div>Loading...</div>;
  } else if (userId) {
    savedBooks = data.me.savedBooks;

    // if local storage doesn't contain saved books, then set
    if (!localStorage.getItem("saved_books") && savedBooks.length > 0) {
      localStorage.setItem(
        "saved_books",
        JSON.stringify(savedBooks.map((element) => element.bookId))
      );
    }
  }

  // delete book
  const handleDeleteBook = async (bookId) => {
    try {
      await removeBook({
        variables: {
          id: userId,
          bookId: bookId,
        },
      });

      removeBookId(bookId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Jumbotron fluid className="text-light bg-dark">
        <Container>
          <h1 className="d-flex justify-content-center text-center">Viewing saved books!</h1>
        </Container>
      </Jumbotron>

      {/* {Auth.loggedIn() &&  */}
        <BookList
        savedBooks={savedBooks}
        handleDeleteBook={handleDeleteBook}
        source={"saved"}
      />
      {/* } */}
    </>
  );
};

export default SavedBooks;
