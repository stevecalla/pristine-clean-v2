import React, { useState } from "react";
import { Container, Col, Row, Tab, Tabs } from "react-bootstrap/";
import AllEmployeesCont from "../components/AllEmployeesCont";
import AllLocationsCont from "../components/AllLocationsCont";
import FullCalendarApp from "../components/Calendar/FullCalendarApp";
import "../styles/spinner.css";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { getUserId } from "../utils/getUserId";
import Auth from "../utils/auth";

const Dashboard = () => {
  const userId = getUserId();

  // get user info to render to page
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { id: userId },
    // if skip is true, this query will not be executed; in this instance, if the user is not logged in this query will be skipped when the component mounts
    skip: !Auth.loggedIn(),
  });

  // control usestate default tab
  const [key, setKey] = useState("calendar");

  if (loading) {
    return (
      <div
        style={{ minHeight: "80vh", width: "100vw" }}
        className="d-flex justify-content-center align-items-center align-content-center mt-5"
      >
        <div className="lds-hourglass"></div>
      </div>
    );
  } else {
    return (
      <>
        <Container style={{ marginTop: "85px" }}>
          <Row className="justify-content-center">
            <p style={{ fontSize: "16px" }}>
              <b>
                Welcome {data.me?.firstName} {data.me?.lastName}!
              </b>
            </p>
          </Row>
        </Container>
        <Container className="mb-1">
          <Row>
            <Col>
              <Tabs
                id="justify-tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 border border-secondary rounded-lg shadow"
                variant="pills"
                justify
              >
                <Tab eventKey="calendar" title="Calendar">
                  <Row>
                    <Col>
                      <FullCalendarApp className="shadow-sm" />
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="employees" title="Employees">
                  <AllEmployeesCont />
                </Tab>
                <Tab eventKey="locations" title="Locations">
                  <AllLocationsCont allLocations={false} />
                </Tab>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};

export default Dashboard;
