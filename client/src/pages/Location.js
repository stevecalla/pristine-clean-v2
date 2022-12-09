import React, { useState } from "react";
import AllLocationsCont from "../components/AllLocationsCont";
import Map from "../components/Map";
import FullCalendarApp from "../components/Calendar/FullCalendarApp";
import format_phone from "../utils/helpers";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Collapse from "react-bootstrap/Collapse";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import { SkipBackwardCircle } from "react-bootstrap-icons";
import "../styles/button-style.css";

//section start
import { useLocation } from 'react-router-dom';
//section end

const Location = ({ locationDetails, selectedPage }) => {

  //section start
  const location = useLocation();
  console.log(location);
  console.log(location.state.locationInfo)
  //section end

  const [showMap, setShowMap] = useState(false);
  const [openDetails, setOpenDetails] = useState(true);
  const [openInstructions, setOpenInstruction] = useState(false);
  const [locationPage, setLocationPage] = useState(false);

  //Back button
  const handleAllLocationsClick = (e) => {
    setLocationPage(true);
  };

  if (locationPage && selectedPage === "calendar") {
    return <FullCalendarApp />;
  } else if (locationPage && selectedPage === "location") {
    return <AllLocationsCont />;
  }

  return (
    <main>
      <Container className="my-2 py-1 shadow rounded-lg  border border-secondary">
        <Button
          onClick={() => setOpenDetails(!openDetails)}
          aria-controls="details-fade-text"
          aria-expanded={openDetails}
          size="lg"
          className="btn-block my-2 collapse-button"
        >
          <Row className="justify-content-between">
            <Col xs={1.25} className="ml-1">
              <div>
                <SkipBackwardCircle
                  id="link-location-page"
                  className="back-button-style"
                  color="white"
                  size="28px"
                  aria-hidden="true"
                  onClick={() => handleAllLocationsClick()}
                />
              </div>
            </Col>
            <Col xs={8}>Location Details</Col>
            <Col xs={1.25} className="mr-1">
              <div>
                <SkipBackwardCircle
                  id="filler"
                  color="transparent"
                  size="28px"
                  aria-hidden="true"
                />
              </div>
            </Col>
          </Row>
        </Button>
        <Collapse in={openDetails}>
          <div id="collapse-details-bar">
            <Row>
              <Col>
                <Card>
                  {/* <Card.Header>{locationDetails.businessName}</Card.Header> */}
                  <Card.Header>{location.state.locationInfo.businessName}</Card.Header>
                  <Card.Body className=" bg-light">
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <b>Manager:</b> McNatt, Colin
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {/* <b>Address:</b> {locationDetails.address} */}
                        <b>Address:</b> {location.state.locationInfo.address}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <b>Contact #:</b>{" "}
                        {/* {format_phone(locationDetails.businessContact)} */}
                        {format_phone(location.state.locationInfo.businessContact)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {/* <b>Frequency:</b> {locationDetails.shifts} */}
                        <b>Frequency:</b> {location.state.locationInfo.shifts}
                      </ListGroup.Item>
                      <Button
                        onClick={() => setOpenInstruction(!openInstructions)}
                        aria-controls="instructions-fade-text"
                        aria-expanded={openInstructions}
                        size="lg"
                        className="btn-block my-2 collapse-button"
                      >
                        Instructions
                      </Button>
                      <Collapse
                        style={{
                          height: "300px",
                          overflow: "scroll!important",
                        }}
                        in={openInstructions}
                      >
                        <div id="collapse-instructions-bar">
                          <Card>
                            <Card.Body className=" bg-light">
                              <ListGroup variant="flush">
                                <ListGroup.Item>
                                  <b>Facility Type:</b>{" "}
                                  {/* {locationDetails.instructions.facilityType} */}
                                  {location.state.locationInfo.instructions.facilityType}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Cleaning Type:</b>{" "}
                                  {/* {locationDetails.instructions.cleaningType} */}
                                  {location.state.locationInfo.instructions.cleaningType}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Bathrooms:</b>{" "}
                                  {/* {locationDetails.instructions.bathrooms} */}
                                  {location.state.locationInfo.instructions.bathrooms}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Lobby:</b>{" "}
                                  {/* {locationDetails.instructions.lobby} */}
                                  {location.state.locationInfo.instructions.lobby}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Sitting-Area:</b>{" "}
                                  {/* {locationDetails.instructions.sittingArea} */}
                                  {location.state.locationInfo.instructions.sittingArea}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Break-Room:</b>{" "}
                                  {/* {locationDetails.instructions.breakRoom} */}
                                  {location.state.locationInfo.instructions.breakRoom}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Fornt-Desk:</b>{" "}
                                  {/* {locationDetails.instructions.frontdesk} */}
                                  {location.state.locationInfo.instructions.frontdesk}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Appliances:</b>{" "}
                                  {/* {locationDetails.instructions.appliances} */}
                                  {location.state.locationInfo.instructions.appliances}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Dusting:</b>{" "}
                                  {/* {locationDetails.instructions.dusting} */}
                                  {location.state.locationInfo.instructions.dusting}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Windows:</b>{" "}
                                  {/* {locationDetails.instructions.exclusions} */}
                                  {location.state.locationInfo.instructions.exclusions}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Trash:</b>{" "}
                                  {/* {locationDetails.instructions.trash} */}
                                  {location.state.locationInfo.instructions.trash}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Vacuum:</b>{" "}
                                  {/* {locationDetails.instructions.vacuum} */}
                                  {location.state.locationInfo.instructions.vacuum}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  {/* <b>Mop:</b> {locationDetails.instructions.mop} */}
                                  <b>Mop:</b> {location.state.locationInfo.instructions.mop}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Additional Services:</b>{" "}
                                  {/* {
                                    locationDetails.instructions
                                      .additionalServices
                                  } */}
                                  {
                                    location.state.locationInfo.instructions
                                      .additionalServices
                                  }
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Exclusions:</b>{" "}
                                  {/* {locationDetails.instructions.exclusions} */}
                                  {location.state.locationInfo.instructions.exclusions}
                                </ListGroup.Item>
                              </ListGroup>
                            </Card.Body>
                          </Card>
                        </div>
                      </Collapse>
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Collapse>
        <Button
          onClick={() => {
            setShowMap(!showMap);
          }}
          aria-controls="details-fade-text"
          aria-expanded={showMap}
          size="lg"
          className="btn-block my-2 collapse-button"
        >
          Get Directions
        </Button>
        {showMap && (
          <Collapse in={showMap}>
            <div id="collapse-map">
              <ResponsiveEmbed
                className="mt-1 rounded"
                style={{ height: "1000px" }}
              >
                <div>
                  {/* <Map destinationDb={locationDetails.address} /> */}
                  <Map destinationDb={location.state.locationInfo.address} />
                </div>
              </ResponsiveEmbed>
            </div>
          </Collapse>
        )}
      </Container>
    </main>
  );
};

export default Location;
