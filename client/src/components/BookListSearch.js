import React from "react";
import { Container, Button, Card, Row } from "react-bootstrap";
import Auth from "../utils/auth";

import { useLocation } from 'react-router-dom';

const BookListSearch = ({
  searchedBooks,
  savedBookIds,
  handleSaveBook,
  source,
}) => {
  const location = useLocation();
  const pathname = useLocation().pathname;
  // console.log({ location }, {pathname});

  return (
    <>
      <Container>
        <h2 className="d-flex justify-content-center text-center">
          {searchedBooks.length
            ? `Viewing ${searchedBooks.length} results:`
            : "Search for a book to begin"}
        </h2>
        <Row xs={1} md={2} lg={2} xl={3} className="p-2 g-2">
          {searchedBooks.map((book) => {
            return (
              <Card key={book.bookId} border="dark" className="p-1">
                {book.image ? (
                  <Card.Img
                    src={book.image}
                    alt={`The cover for ${book.title}`}
                    variant="top"
                    style={{
                      height: "475px",
                      width: "100%",
                      objectPosition: "top",
                      overflow: "scroll",
                    }}
                  />
                ) : null}
                <Card.Body>
                  <Card.Title className="mb-0">{book.title}</Card.Title>
                  <p className="small mb-0">{book.authors.length === 1 ? "Author: " : "Authors: " } {`${book.authors.join(', ')}`}</p>
                  <p className="small mt-0">
                    Published Date: {book.publishedDate}
                  </p>
                  <Card.Text style={{ height: "300px", overflow: "scroll" }}>
                    {book.description}
                  </Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={savedBookIds?.some(
                        (savedBookId) => savedBookId === book.bookId
                      )}
                      className="btn-block btn-info"
                      onClick={() => handleSaveBook(book.bookId)}
                    >
                      {savedBookIds?.some(
                        (savedBookId) => savedBookId === book.bookId
                      )
                        ? "Book Already Saved!"
                        : "Save this Book!"}
                    </Button>
                  )}
                  <div className="d-flex justify-content-between">
                    <Button
                      className="btn-block btn-info mt-1 mr-1"
                      size="sm"
                      target="_blank"
                      href={book.infoLink}
                    >
                      Google Info
                    </Button>
                    <Button
                      className="btn-block btn-info mt-1 ml-1"
                      size="sm"
                      target="_blank"
                      href={book.previewLink}
                    >
                      Google Preview
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default BookListSearch;
