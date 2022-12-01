import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import "bootstrap/dist/css/bootstrap.min.css";

import AllEmployeesCont from "../components/AllEmployeesCont";
import AllLocationsCont from "../components/AllLocationsCont";
import FullCalendarApp from "../components/FullCalendarApp";

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { getUserId } from "../utils/getUserId";
import Auth from "../utils/auth";

const ManagerDash = () => {
  const [openEmployee, setOpenEmployee] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);

  const userId = getUserId();
  console.log(userId);

  // get user info to render to page
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { id: userId },
    // if skip is true, this query will not be executed; in this instance, if the user is not logged in this query will be skipped when the component mounts
    skip: !Auth.loggedIn(),
  });

  // console.log({ data }, loading);

  return (
    <Container>
      <Row>
        <Col>
          <FullCalendarApp />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            onClick={() => setOpenEmployee(!openEmployee)}
            aria-controls="example-fade-text"
            aria-expanded={openEmployee}
            size="lg"
            className="btn-block my-2"
          >
            View Locations
          </Button>
          <Collapse
            // style={{'height': '300px', 'overflow': 'scroll!important'}}
            in={openEmployee}
          >
            <div id="collapse-employee-bar">
              <AllLocationsCont />
            </div>
          </Collapse>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            onClick={() => setOpenLocation(!openLocation)}
            aria-controls="example-fade-text"
            aria-expanded={openLocation}
            size="lg"
            className="btn-block my-2"
          >
            View All Employees
          </Button>
          <Collapse
            // style={{'height': '500px', 'overflow': 'scroll!important'}}
            in={openLocation}
          >
            <div id="collapse-location-bar">
              <AllEmployeesCont />
            </div>
          </Collapse>
        </Col>
      </Row>
    </Container>
  );
};

export default ManagerDash;
