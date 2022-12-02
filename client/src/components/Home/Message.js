import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import mopClean from "../../assets/mopClean.png";
import qrcode_dry_sands from "../../assets/qrcode_dry_sands.png";

const Message = () => {
  return (
    <div className="d-flex flex-column align-items-center mt-3 mb-3">
      <Card
        style={{ width: "18rem" }}
        className="d-flex align-items-center mb-1"
      >
        <Card.Img
          variant="top"
          style={{ width: "150px", height: "150px" }}
          src={qrcode_dry_sands}
        />
        <Card.Body className="pt-0">
          <Card.Title
            className="d-flex justify-content-center"
            style={{
              fontStyle: "bold",
              fontFamily: "Georgia, Times New Roman, serif",
            }}
          >
            Cleaning at its finest
          </Card.Title>
          <Card.Text>{/* Cleaning at its finest. */}</Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
          <Card.Link
            href="https://www.pristinecleanbycolin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p
              className="d-flex justify-content-center mb-0"
              style={{
                fontStyle: "bold",
                fontFamily: "Georgia, Times New Roman, serif",
              }}
            >
              Pristine Clean
            </p>
          </Card.Link>
        </Card.Body>
      </Card>

      <Card
        className="d-flex flex-column align-items-center mb-1"
        style={{ width: "18rem" }}
      >
        <Card.Body>
          <Card.Title
            className="text-center"
            style={{ textDecoration: "underline" }}
          >
            Shifts - Available
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {/* Card Subtitle */}
          </Card.Subtitle>
          <Card.Text>
            <li>Company #1, 6:30a, MWF</li>
            <li>Company #1, 6:30a, MWF</li>
            <li>Company #1, 6:30a, MWF</li>
            <li>Company #1, 6:30a, MWF</li>
          </Card.Text>
          <p style={{ marginTop: "8px", marginBottom: "0px" }}>
            Contact Colin at 720-123-4567
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Message;
