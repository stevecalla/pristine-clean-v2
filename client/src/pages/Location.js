import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Collapse from "react-bootstrap/Collapse";

import Map from '../components/Map'

import { useQuery } from "@apollo/client";
// query a single location
import { QUERY_SINGLE_LOCATION } from "../utils/queries";

const Location = () => {
  // Execute the query on component load
  const { loadingLocation, locationData } = useQuery(QUERY_SINGLE_LOCATION);
  console.log(loadingLocation);
  // Use Form.Optional chaining to check if data exists and if it has an business property. If not, return an empty array to use.
  const location = locationData?.businessName || [];

  const [openInstructions, setOpenInstruction] = useState(false);

  return (
    <main>
      {/* <Container>
        <Row>
          <Col>
            <Card>
              <Card.Header>{location.businessName}</Card.Header>
              <Card.Body className=" bg-light">
                <ListGroup variant="flush">
                  <ListGroup.Item>{location.manager}</ListGroup.Item>
                  <ListGroup.Item>{location.address}</ListGroup.Item> */}
                   {/* TODO: add phone # to model/seed/query */}
                  {/* <ListGroup.Item>{location.phone}</ListGroup.Item> */}
                  {/* <ListGroup.Item>{location.cleaners}</ListGroup.Item>
                  <ListGroup.Item>{location.shifts}</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              onClick={() => setOpenInstruction(!openInstructions)}
              aria-controls="instructions-fade-text"
              aria-expanded={openInstructions}
              size="lg"
              className="btn-block my-2"
            >
              View Instructions
            </Button>
            <Collapse
              style={{ 'height': '300px', 'overflow': 'scroll!important' }}
              in={openInstructions}
            >
              <div id="collapse-instructions-bar">
                <Card>
                  <Card.Body className=" bg-light">
                    <ListGroup variant="flush">
                      <ListGroup.Item>Facility Type: {location.instructions.facilityType}</ListGroup.Item>
                      <ListGroup.Item>Cleaning Type: {location.instructions.cleaningType}</ListGroup.Item>
                      <ListGroup.Item>Bathrooms: {location.instructions.bathrooms}</ListGroup.Item>
                      <ListGroup.Item>Lobby: {location.instructions.lobby}</ListGroup.Item>
                      <ListGroup.Item>Sitting-Area: {location.instructions.sittingArea}</ListGroup.Item>
                      <ListGroup.Item>Break-Room: {location.instructions.breakRoom}</ListGroup.Item>
                      <ListGroup.Item>Fornt-Desk: {location.instructions.frontdesk}</ListGroup.Item>
                      <ListGroup.Item>Appliances: {location.instructions.appliances}</ListGroup.Item>
                      <ListGroup.Item>Dusting: {location.instructions.dusting}</ListGroup.Item>
                      <ListGroup.Item>Windows: {location.instructions.windows}</ListGroup.Item>
                      <ListGroup.Item>Trash: {location.instructions.trash}</ListGroup.Item>
                      <ListGroup.Item>Vacuum: {location.instructions.vacuum}</ListGroup.Item>
                      <ListGroup.Item>Mop: {location.instructions.mop}</ListGroup.Item>
                      <ListGroup.Item>Additional Services: {location.instructions.additionalServices}</ListGroup.Item>
                      <ListGroup.Item>Exclusions: {location.instructions.exclusions}</ListGroup.Item>
                    </ListGroup >
                  </Card.Body >
                </Card >
              </div >
            </Collapse >
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Map />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}

      <Container>
        <Row>
          <Col>
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
      </Container>
    </main >
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
