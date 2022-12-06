import React, { useState } from "react";
import { Row, Col, Card, ListGroup } from "react-bootstrap/";
import { InfoCircleFill } from "react-bootstrap-icons";
import { useQuery } from "@apollo/client";
import { QUERY_LOCATIONS } from "../utils/queries";
import Location from "../pages/Location";
import "../styles/button-style.css";

const AllLocationsCont = ({ allLocations }) => {
  const { loading: locationLoad, data: locationData } = useQuery(QUERY_LOCATIONS);

  let locations;
  if (!locationLoad) {
    locations = locationData.locations;
  }

  const [locationPage, setLocationPage] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({});

  const handleInfoClick = (event) => {
    let locationId = event.currentTarget.getAttribute("data-location");

    let filteredLocation = locations.filter(
      (element) => element._id === locationId
    );
    setSelectedLocation(filteredLocation[0]);
    setLocationPage(true);
  };

  if (locationPage) {
    return (
      <Location locationDetails={selectedLocation} selectedPage={"location"} />
    );
  }

  if (!locationLoad) {
    return (
      <>
        {locations?.map((location, index) => (
          <Card key={index} className="shadow border border-secondary">
            <Card.Header className="container">
              <Row className="justify-content-between">
                <Col xs={10}>{location.businessName}</Col>
                <Col xs={1.5}>
                  <div>
                    <InfoCircleFill
                      id="link-location-page"
                      color="orange"
                      size="28px"
                      className="mr-2 info-button-style"
                      // transform="grow-9"
                      data-location={location._id}
                      onClick={(event) => handleInfoClick(event)}
                    />
                  </div>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body className=" bg-light">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <b>Address:</b> {location.address}
                </ListGroup.Item>
                <ListGroup.Item>
                  <b>Days:</b> {location.shifts}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }
};

export default AllLocationsCont;
