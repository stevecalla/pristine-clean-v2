import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Map from '../components/Map'

import { useQuery } from "@apollo/client";
// query a single location
import { QUERY_SINGLE_LOCATION } from "../utils/queries";

const Location = () => {
  // Execute the query on component load
  const { loadingLocation, locationData } = useQuery(QUERY_SINGLE_LOCATION);
  console.log(loadingLocation);
  // Use Form.Optional chaining to check if data exists and if it has an business property. If not, return an empty array to use.
  const location = locationData?.business || [];
  return (
    <main>
      {/* <Container>
        <Row>
          <Col> */}
      {/* h1 location.business */}
      {/*  li location.manager */}
      {/*  li location.cleaners */}
      {/*  li location.cleaners */}
      {/* <Card>
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
          <Col> */}
      {/*  h1 INSTRUCTIONs */}
      {/*  li location.instructions */}
      {/* <Card>
              <Card.Header>Instructions</Card.Header>
              <Card.Body className=" bg-light">
                <ListGroup variant="flush">
                  <ListGroup.Item>{location.instructions}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row> */}
      <Col>{/* MAP GOES HERE */}</Col>
      {/* </Row>
        <Row>
          <Col>
            <Button type="click" className="btn-primary">
              Get Directions
            </Button>
          </Col>
        </Row>
      </Container> */}
      <Container>
        <Row>
          <Col>
            {/* h1 location.business */}
            {/*  li location.manager */}
            {/*  li location.cleaners */}
            {/*  li location.cleaners */}
            <Card>
              <Card.Header><h1>Walmart</h1></Card.Header>
              <Card.Body className=" bg-light">
                <ListGroup variant="flush">
                  <ListGroup.Item>Manager: Mcnatt, Colin</ListGroup.Item>
                  <ListGroup.Item>Address: 2468 Xanadu Circle, Narnia 08412</ListGroup.Item>
                  <ListGroup.Item>Cleaners
                    <ListGroup variant="flush">
                      <ListGroup.Item>Ratcliff, Patrick</ListGroup.Item>
                      <ListGroup.Item>Calla, Steve</ListGroup.Item>
                      <ListGroup.Item>Cleveland, Alex</ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
                  <ListGroup.Item>Frequency:
                    <ListGroup variant="flush">
                      <ListGroup.Item>Tuesday</ListGroup.Item>
                      <ListGroup.Item>Friday</ListGroup.Item>
                      <ListGroup.Item>Sunday</ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
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
                  <ListGroup.Item>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</ListGroup.Item>
                </ListGroup>
              </Card.Body>
              <Card.Body>
              <Map />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          {/* MAP GOES HERE */}
          <Col >
          
            
            
          </Col>
        </Row>
        
        {/* <Row>
          <Col>
            <Button type="click" className="btn-primary">
              Get Directions
            </Button>
          </Col>
        </Row> */}
      </Container>

    </main>
  );
};

export default Location;

const mapContainer = {
  flexDirection: "column",
  width: "100%",
  height: "100%",
  position: "relative",
  margin: 0,
  padding: 0
};
