import React from "react";
import { Container, Button, Card, Row } from "react-bootstrap";
import Auth from "../utils/auth";

import { useLocation } from 'react-router-dom';

const BookListSaved = ({ savedBooks, handleDeleteBook, source }) => {
  const location = useLocation();
  const pathname = useLocation().pathname;
  // console.log({ location }, {pathname});

  return (
    <>
      <Container>
        <h2 className="d-flex justify-content-center text-center">
          {Auth.loggedIn() === false
            ? `Your login session has expired. Please signin again`
            : savedBooks.length
            ? `Viewing ${savedBooks.length} saved ${
                savedBooks.length === 1 ? "book" : "books"
              }`
            : `You have no saved books!`}
        </h2>
        <Row xs={1} md={2} lg={2} xl={3} className="p-2 g-2">
          {savedBooks.map((book) => {
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
                      objectFit: "cover",
                      objectPosition: "top",
                      overflow: "scroll",
                    }}
                  />
                ) : null}
                <Card.Body>
                  <Card.Title className="mb-0">{book.title}</Card.Title>
                  <p className="small mb-0">Authors: {book.authors}</p>
                  <p className="small mt-0">
                    Published Date: {book.publishedDate}
                  </p>
                  <Card.Text style={{ height: "500px", overflow: "scroll" }}>
                    {book.description}
                  </Card.Text>

                  <div className="d-flex justify-content-between">
                    <Button
                      className="btn-block btn-info mt-1 mr-1 btn-sm"
                      target="_blank"
                      href={book.infoLink}
                    >
                      Google Info
                    </Button>
                    <Button
                      className="btn-block btn-info mt-1 ml-1 btn-sm"
                      target="_blank"
                      href={book.previewLink}
                    >
                      Google Preview
                    </Button>
                  </div>

                  <Button
                    className="btn-block btn-danger mt-2 btn-sm"
                    onClick={() => handleDeleteBook(book.bookId)}
                  >
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default BookListSaved;
