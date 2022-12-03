import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Collapse from "react-bootstrap/Collapse";
import { SkipBackwardCircle } from "react-bootstrap-icons";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import AllLocationsCont from "../components/AllLocationsCont";
import format_phone from "../utils/helpers"
import Map from "../components/Map";

import { useQuery } from "@apollo/client";
// // query all locations
import { QUERY_LOCATIONS } from "../utils/queries";

const Location = ({ locationDetails }) => {
  // console.log(locationDetails);
  // let locationAddress = locationDetails.address;
  // console.log(locationDetails.address);
  const [showMap, setShowMap] = useState(false);

  // Execute the query on component load
  // const { loadingLocation, locationData } = useQuery(QUERY_SINGLE_LOCATION);
  // console.log(loadingLocation);
  // Use Form.Optional chaining to check if data exists and if it has a business property. If not, return an empty array to use.
  // const location = locationData?.businessName || [];

  const [openDetails, setOpenDetails] = useState(true);
  const [openInstructions, setOpenInstruction] = useState(false);

  const [locationPage, setLocationPage] = useState(false);
  const handleAllLocationsClick = (e) => {
    setLocationPage(!locationPage);
  };
  // TODO: throwing errors, why not returning trying to map through property that is not defined as array? 
  // const { loading, data } = useQuery(QUERY_LOCATIONS);
  // const cleaners = data.locations.cleaners;

  // if (loading) {
  //   return (
  //     <div
  //       style={{ height: "200px", width: "100vw" }}
  //       className="d-flex justify-content-center align-items-center align-content-center m-0"
  //     >
  //       <div className="lds-hourglass"></div>
  //     </div>
  //   );
  // }

  if (locationPage) {
    // console.log("yes 1000");
    return <AllLocationsCont />;
  }

  return (
    <main>
      <Container className="my-2 shadow rounded-lg py-1 border border-secondary">
        <Button
          onClick={() => setOpenDetails(!openDetails)}
          aria-controls="details-fade-text"
          aria-expanded={openDetails}
          size="lg"
          className="btn-block my-2"
        >
          <Row className="justify-content-between">
            <Col xs={1.25} className="ml-1">
              <div>
                <SkipBackwardCircle
                  id="link-location-page"
                  color="white"
                  size="28px"
                  aria-hidden="true"
                  // transform="grow-9"
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
                // transform="grow-9"
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
                  <Card.Header>{locationDetails.businessName}</Card.Header>
                  <Card.Body className=" bg-light">
                    <ListGroup variant="flush">
                      <ListGroup.Item>Manager: McNatt, Colin</ListGroup.Item>
                      <ListGroup.Item>
                        Address: {locationDetails.address}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Contact #: {format_phone(locationDetails.businessContact)}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        {/* list group for cleaners */}
                        Cleaners
                        <ListGroup variant="flush">
                          {/* TODO: throwing errors, why not returning? */}
                          {/* {cleaners.map((cleaner, index) => (
                            <>
                              <ListGroup.Item>
                                {cleaner.firstName}, {cleaner.lastName}
                              </ListGroup.Item>
                            </>
                          ))}; */}
                        </ListGroup>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Frequency: {locationDetails.shifts}
                      </ListGroup.Item>
                      <Button
                        onClick={() => setOpenInstruction(!openInstructions)}
                        aria-controls="instructions-fade-text"
                        aria-expanded={openInstructions}
                        size="lg"
                        className="btn-block my-2"
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
                                  {locationDetails.instructions.facilityType}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Cleaning Type:</b>{" "}
                                  {locationDetails.instructions.cleaningType}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Bathrooms:</b>{" "}
                                  {locationDetails.instructions.bathrooms}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Lobby:</b>{" "}
                                  {locationDetails.instructions.lobby}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Sitting-Area:</b>{" "}
                                  {locationDetails.instructions.sittingArea}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Break-Room:</b>{" "}
                                  {locationDetails.instructions.breakRoom}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Fornt-Desk:</b>{" "}
                                  {locationDetails.instructions.frontdesk}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Appliances:</b>{" "}
                                  {locationDetails.instructions.appliances}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Dusting:</b>{" "}
                                  {locationDetails.instructions.dusting}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Windows:</b>{" "}
                                  {locationDetails.instructions.exclusions}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Trash:</b>{" "}
                                  {locationDetails.instructions.trash}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Vacuum:</b>{" "}
                                  {locationDetails.instructions.vacuum}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Mop:</b> {locationDetails.instructions.mop}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Additional Services:</b>{" "}
                                  {
                                    locationDetails.instructions
                                      .additionalServices
                                  }
                                </ListGroup.Item>
                                <ListGroup.Item>
                                  <b>Exclusions:</b>{" "}
                                  {locationDetails.instructions.exclusions}
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

        {/* <Row> */}
          <Button
            onClick={() => {
              // console.log("click");
              setShowMap(!showMap);
            }}
            aria-controls="details-fade-text"
            aria-expanded={showMap}
            size="lg"
            className="btn-block my-2"
          >
            Get Directions
          </Button>
        {/* </Row> */}

        {showMap && (
          <Collapse in={showMap}>
            <div id="collapse-map">
              <ResponsiveEmbed
                className="mt-1 rounded"
                style={{ height: "1000px" }}
              >
                <div>
                  <Map destinationDb={locationDetails.address} />
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

// const mapContainer = {
//   flexDirection: "column",
//   width: "100%",
//   height: "100%",
//   position: "relative",
// };
