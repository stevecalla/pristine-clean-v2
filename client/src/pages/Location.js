import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Collapse from "react-bootstrap/Collapse";
// import Ratio from 'react-bootstrap/Ratio';
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed';
// import Frame from "react-frame-component";

import Map from '../components/Map';

// import { useQuery } from "@apollo/client";
// query a single location
// import { QUERY_SINGLE_LOCATION } from "../utils/queries";

// const Location = ({ location.id }) => {
const Location = ({ locationDetails }) => {

  console.log(locationDetails)

  // Execute the query on component load
  // const { loadingLocation, locationData } = useQuery(QUERY_SINGLE_LOCATION);
  // console.log(loadingLocation);
  // Use Form.Optional chaining to check if data exists and if it has an business property. If not, return an empty array to use.
  // const location = locationData?.businessName || [];

  const [openDetails, setOpenDetails] = useState(true);
  const [openInstructions, setOpenInstruction] = useState(false);

  return (
    <main>
      {/* <Container className="my-2">
        <Button
          onClick={() => setOpenDetails(!openDetails)}
          aria-controls="details-fade-text"
          aria-expanded={openDetails}
          size="lg"
          className="btn-block my-2"
        >
          View Location Details
        </Button>
        <Collapse
          in={openDetails}
        >
          <div id="collapse-details-bar">
            <Row>
              <Col>
                <Card>
                  <Card.Header>{location.businessName}</Card.Header>
                  <Card.Body className=" bg-light">
                    <ListGroup variant="flush">
                      <ListGroup.Item>{location.manager}</ListGroup.Item>
                      <ListGroup.Item>{location.address}</ListGroup.Item>
                      <ListGroup.Item>{location.businessContact}</ListGroup.Item>
                      <ListGroup.Item>{location.cleaners}</ListGroup.Item>
                      <ListGroup.Item>{location.shifts}</ListGroup.Item>
                      <ListGroup.Item>
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
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Collapse>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <ResponsiveEmbed className='mt-1' style={{ height: '1000px' }}>
                  <div>
                    <Map />
                  </div>
                </ResponsiveEmbed>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}


      <Container className="my-2">
        <Button
          onClick={() => setOpenDetails(!openDetails)}
          aria-controls="details-fade-text"
          aria-expanded={openDetails}
          size="lg"
          className="btn-block my-2"
        >
          View Location Details
        </Button>
        <Collapse
          in={openDetails}
        >
          <div id="collapse-details-bar">
            <Row>
              <Col>
                <Card>
                  <Card.Header>Wal-mart</Card.Header>
                  <Card.Body className=" bg-light">
                    <ListGroup variant="flush">
                      <ListGroup.Item>Manager: McNatt, Colin</ListGroup.Item>
                      <ListGroup.Item>Address12345 Place Dr</ListGroup.Item>
                      <ListGroup.Item>Contact #: 123-456-7890</ListGroup.Item>
                      <ListGroup.Item>Cleaners: Patrick, Steve, Alex</ListGroup.Item>
                      <ListGroup.Item>FrequencyMonday, Tuesday, Friday</ListGroup.Item>
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
                                <ListGroup.Item>Facility Type: Retail</ListGroup.Item>
                                <ListGroup.Item>Cleaning Type: Deep</ListGroup.Item>
                                <ListGroup.Item>Bathrooms: Flush the toilet!</ListGroup.Item>
                                <ListGroup.Item>Lobby: Gonna be here a while</ListGroup.Item>
                                <ListGroup.Item>Sitting-Area: Standing room only</ListGroup.Item>
                                <ListGroup.Item>Break-Room: Try the salsa</ListGroup.Item>
                                <ListGroup.Item>Fornt-Desk: Speak clearly</ListGroup.Item>
                                <ListGroup.Item>Appliances: Yes, please!</ListGroup.Item>
                                <ListGroup.Item>Dusting: Aplly liberally</ListGroup.Item>
                                <ListGroup.Item>Windows: Write your Name</ListGroup.Item>
                                <ListGroup.Item>Trash: Excuse me!?</ListGroup.Item>
                                <ListGroup.Item>Vacuum: Has feelings too</ListGroup.Item>
                                <ListGroup.Item>Mop: It's a swab</ListGroup.Item>
                                <ListGroup.Item>Additional Services: All of them</ListGroup.Item>
                                <ListGroup.Item>Exclusions: Everybody is special</ListGroup.Item>
                              </ListGroup >
                            </Card.Body >
                          </Card >
                        </div >
                      </Collapse >
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Collapse>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <ResponsiveEmbed className='mt-1' style={{ height: '1000px' }}>
                  <div>
                    <Map />
                  </div>
                </ResponsiveEmbed>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main >
  );
};

export default Location;

// const mapContainer = {
//   flexDirection: "column",
//   width: "100%",
//   height: "100%",
//   position: "relative",
// };
