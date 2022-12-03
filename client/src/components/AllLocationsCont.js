import React, { useState } from "react";

// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
import { InfoCircleFill } from "react-bootstrap-icons";
import Auth from "../utils/auth";
import { getUserId } from "../utils/getUserId";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Location from "../pages/Location";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AllLocationsCont = ({ allLocations }) => {
  const userId = getUserId();

  // console.log(!Auth.loggedIn());

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { id: userId },
    skip: !Auth.loggedIn(),
  });

  let locations;
  if (!loading) {
    locations = data?.me?.locations;
    // console.log(locations);
  }

  const [locationPage, setLocationPage] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState({});

  // console.log(allLocations);

  const handleInfoClick = (event) => {
    // console.log('info click')
    // console.log(event)
    // console.log(event.currentTarget.getAttribute("data-location"));
    let locationId = event.currentTarget.getAttribute("data-location");

    // console.log(locations.map((element) => console.log(element._id, locationId)));

    let filteredLocation = locations.filter(
      (element) => element._id === locationId
    );
    // console.log("selected location = ", filteredLocation[0]);
    setSelectedLocation(filteredLocation[0]);
    setLocationPage(true);
  };

  if (locationPage) {
    // console.log("yes 1");

    return <Location locationDetails={selectedLocation} />;
  }

  if (!loading) {
    return (
      <>
        {locations?.map((location, index) => (
          <Card key={index} className="shadow border border-secondary">
            <Card.Header className="container">
              <Row className="justify-content-between">
                <Col xs={10}>{location.businessName}</Col>
                <Col xs={1.5}>
                  <div>
                    {/* <FontAwesomeIcon
                        className="pl-2 mr-2 "
                        icon="fa-info-circle"
                        transform="grow-9"
                        // color='orange'
                        data-location={location._id}
                        // style={{ background: "blue" }}
                        // style={display ? isDisplayed : isNotDisplayed}
                        onClick={(event) => handleInfoClick(event)}
                      /> */}
                    <InfoCircleFill
                      id="link-location-page"
                      color="orange"
                      size="28px"
                      className="mr-2"
                      // transform="grow-9"
                      data-location={location._id}
                      onClick={(event) => handleInfoClick(event)}
                    />
                  </div>
                  {/* </Button> */}
                  {/* </Link> */}
                </Col>
              </Row>
            </Card.Header>
            <Card.Body className=" bg-light">
              <ListGroup variant="flush">
                <ListGroup.Item>Address: {location.address}</ListGroup.Item>
                <ListGroup.Item>Days: {location.shifts}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }
};

export default AllLocationsCont;
