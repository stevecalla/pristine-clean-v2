import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import AllEmployeesCont from "../components/AllEmployeesCont";
import AllLocationsCont from "../components/AllLocationsCont";
import FullCalendarApp from "../components/FullCalendarApp";

import "../styles/spinner.css";

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

  // control usestate default tab
  const [key, setKey] = useState("calendar");

  if (loading) {
    return (
      <div
        style={{ height: "200px", width: "100vw" }}
        className="d-flex justify-content-center align-items-center align-content-center m-0"
      >
        <div className="lds-hourglass"></div>
      </div>
    );
  } else {
    return (
      <Container className="my-3">
        <Row>
          <Col>
            <Tabs
              id="justify-tab"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3 border border-secondary rounded"
              variant="pills"
              justify
            >
              <Tab eventKey="calendar" title="View Calendar">
                <Row>
                  <Col>
                    <FullCalendarApp />
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="employees" title="View Employees">
                <AllEmployeesCont />
              </Tab>
              <Tab eventKey="locations" title="View All Locations">
                <AllLocationsCont />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default ManagerDash;
