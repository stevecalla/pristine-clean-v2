import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import mopClean from "../../assets/mopClean.png";
import qrcode_dry_sands.png from "../../assets/mopClean.png";

const Message = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center overflow-auto mt-5">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link
            href="https://www.pristinecleanbycolin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pristine Clean
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Message;
