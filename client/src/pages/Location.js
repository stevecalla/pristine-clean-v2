import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { useQuery } from "@apollo/client";
// query a single location
import { QUERY_SINGLE_LOCATION } from "../../utils/queries";

const Location = () => {
  // Execute the query on component load
  const { loadingLocation, locationData } = useQuery(QUERY_SINGLE_LOCATION);
  // Use Form.Optional chaining to check if data exists and if it has an business property. If not, return an empty array to use.
  const location = locationData?.business || [];
  return (
    <main>
      <Container>
        <Row>
          <Col>
            {/* h1 location.business */}
            {/*  li location.manager */}
            {/*  li location.cleaners */}
            {/*  li location.cleaners */}
            <Card>
              <Card.Header>{location.business}</Card.Header>
              <Card.Body className=" bg-light">
                <ListGroup variant="flush">
                  <ListGroup.Item>{location.manager}</ListGroup.Item>
                  <ListGroup.Item>{location.cleaners}</ListGroup.Item>
                  <ListGroup.Item>{location.frequency}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            {/*  h1 INSTRUCTIONs */}
            {/*  li location.instructions */}
            <Card>
              <Card.Header>Instructions</Card.Header>
              <Card.Body className=" bg-light">
                <ListGroup variant="flush">
                  <ListGroup.Item>{location.instructions}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>{/* MAP GOES HERE */}</Col>
        </Row>
        <Row>
          <Col>
            <Button type="click" className="btn-primary">
              Get Directions
            </Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Location;
