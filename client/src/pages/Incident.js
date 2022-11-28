import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useQuery } from "@apollo/client";
// // query all employees and locations
import { QUERY_EMPLOYEES, QUERY_LOCATIONS } from "../utils/queries";

function Incident() {
  // Execute the query on component load
  const { loadingEmployees, employeesData } = useQuery(QUERY_EMPLOYEES);
  const { loadingLocations, locationsData } = useQuery(QUERY_LOCATIONS);
  console.log(loadingEmployees, loadingLocations);
  // Use Form.Optional chaining to check if data exists and if it has an employee property. If not, return an empty array to use.
  const employees = employeesData?.employees || [];
  const locations = locationsData?.employees || [];

  const [employeeName, setEmployeeName] = useState([0]);
  const [location, setLocation] = useState([0]);
  const [incident, setIncident] = useState("");
  const [emergency, setEmergency] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "employee") {
      setEmployeeName(inputValue);
    } else if (inputType === "location") {
      setLocation(inputValue);
    } else if (inputType === "incident") {
      setIncident(inputValue);
    } else {
      setEmergency(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!employeeName) {
      setErrorMessage("You must select your name");
      return;
    }

    if (!location) {
      setErrorMessage("You must select the location of the incident");
      return;
    }

    if (incident.length < 1) {
      setErrorMessage("You must enter a description of the incident");
      return;
    }

    if (emergency) {
      setErrorMessage("Contact the manager for this location ASAP!");
    }

    alert(`Thank you for your submission ${employeeName}!`);

    setEmployeeName([0]);
    setLocation([0]);
    setIncident("");
    setEmergency(false);
  };

  return (
    <main>
      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleFormSubmit}>
              <Row className="justify-content-center m-2">
                <select
                  className="form-select name-form-select"
                  onChange={handleInputChange}
                >
                  <option>Select Name</option>
                  {employees.map((employee) => (
                    <option
                      value={employee._id}
                      id="employee"
                      name="employeeName"
                      type="employee"
                    >
                      {employee.last}, {employee.first}
                    </option>
                  ))}
                </select>
              </Row>
              <Row className="justify-content-center m-2">
                <select className="form-select location-form-select">
                  <option>Select Location</option>
                  {locations.map((location) => (
                    <option
                      value={location._id}
                      onChange={handleInputChange}
                      id="location"
                      name="location"
                      type="location"
                    >
                      {location.business}
                    </option>
                  ))}
                </select>
              </Row>
              <Row className="justify-content-center m-2">
                <div>
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Enter Description of Incident
                  </label>
                  <textarea
                    className="form-control incident-form-text"
                    value={incident.incident}
                    onChange={handleInputChange}
                    id="incident"
                    name="incident"
                    rows="3"
                  ></textarea>
                </div>
              </Row>
              <Row className="justify-content-center m-2">
                <div>
                  <input
                    className="form-check-input"
                    onChange={handleInputChange}
                    type="checkbox"
                    value="emergency"
                    id="emergency"
                  ></input>
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Is this an emergency?
                  </label>
                </div>
              </Row>
              <Row className="justify-content-center m-2">
                <div>
                  <Button type="submit" className="btn-primary">
                    Submit
                  </Button>
                </div>
              </Row>
              <Row className="justify-content-center m-2">
                <p className="error-text text-danger">{errorMessage}</p>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Incident;
