import React, { useState } from "react";
import { Button, Container, Col, Row } from "react-bootstrap/";
import AllEmployeesCont from "../components/AllEmployeesCont";
import AllLocationsCont from "../components/AllLocationsCont";
import FullCalendarApp from "../components/Calendar/FullCalendarApp";
import "../styles/spinner.css";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { getUserId } from "../utils/getUserId";
import Auth from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ renderPanel }) => {
  const [ isActiveCalendar, setIsActiveCalendar ] = useState(true);
  const [ isActiveEmployees, setIsActiveEmployees ] = useState(false);
  const [ isActiveLocations, setIsActiveLocations ] = useState(false);

  // get user info to render to page
  const userId = getUserId();
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { id: userId },
    // if skip is true, this query will not be executed; in this instance, if the user is not logged in this query will be skipped when the component mounts
    skip: !Auth.loggedIn(),
  });

  let navigate = useNavigate();

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

          <div className="d-flex flex-row mb-1 p-0 rounded" style={{ border: "1px solid blue" }} >
            <Button
              variant="outline-primary"
              active={isActiveCalendar}
              style={{ flex: "auto", border: "none", borderRadius: "0" }}
              onClick={() => {
                navigate("/calendar");
                setIsActiveCalendar(!isActiveCalendar);
                setIsActiveEmployees(false);
                setIsActiveLocations(false);
              }}
            >
              Calendar
            </Button>
            <Button
              variant="outline-primary"
              active={isActiveEmployees}
              style={{ flex: "auto", border: "none", borderRadius: "0" }}
              onClick={() => {
                navigate("/employees");
                setIsActiveCalendar(false);
                setIsActiveEmployees(!isActiveEmployees);
                setIsActiveLocations(false);
              }}
            >
              Employees
            </Button>
            <Button
              variant="outline-primary"
              active={isActiveLocations}
              style={{ flex: "auto", border: "none", borderRadius: "0" }}
              onClick={() => {
                navigate("/locations");
                setIsActiveCalendar(false);
                setIsActiveEmployees(false);
                setIsActiveLocations(!isActiveLocations);
              }}
            >
              Locations
            </Button>
          </div>

              {renderPanel === "calendar" ? (
                <FullCalendarApp />
              ) : renderPanel === "employees" ? (
                <AllEmployeesCont />
              ) : (
                <AllLocationsCont />
              )}
            </Col>
          </Row>
        </Container>
      </>
    );
  }
};

export default Dashboard;
