import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { getUserId } from "../utils/getUserId";
import Auth from "../utils/auth";

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

// import { useQuery } from "@apollo/client";

// import { QUERY_SINGLE_EMPLOYEE } from '../utils/queries';

const Availability = () => {
  // const { loading, employeeData } = useQuery(QUERY_SINGLE_EMPLOYEE);

  //load employee info here
  //map availability to the toggles/switch
  //
  const userId = getUserId();
  console.log(userId);

  // get user info to render to page
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { id: userId },
    // if skip is true, this query will not be executed; in this instance, if the user is not logged in this query will be skipped when the component mounts
    skip: !Auth.loggedIn(),
  });
  console.log({ data }, loading);

  const [switchState, setSwitchState] = useState({
    mondayAm: false,
    mondayPm: false,
    tuesdayAm: false,
    tuesdayPm: false,
    wednesdayAm: false,
    wednesdayPm: false,
    thursdayAm: false,
    thursdayPm: false,
    fridayAm: false,
    fridayPm: false,
    saturdayAm: false,
    saturdayPm: false,
    sundayAm: false,
    sundayPm: false,
  });

  function handleChange(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setSwitchState({
      ...switchState,
      [evt.target.name]: value,
    });

    //add mutation query here
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //mutation to edit this employees "Availability"
  };

  // if (loading) {
  //     return <div>Loading...</div>;
  // }
  return (
    <main>
      <Container>
        <Form onSubmit={handleFormSubmit}>
          <Row>
            <Col>
              <p>MONDAY</p>
            </Col>
            <Col>
              <Form.Check
                name="mondayAm"
                type="switch"
                id="mondayAm-switch"
                checked={switchState.mondayAm}
                onChange={handleChange}
                label="AM"
              />
            </Col>
            <Col>
              <Form.Check
                name="mondayPm"
                type="switch"
                id="mondayPm-switch"
                checked={switchState.mondayPm}
                onChange={handleChange}
                label="PM"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>TUESDAY</p>
            </Col>
            <Col>
              <Form.Check
                name="tuesdayAm"
                type="switch"
                id="tuesdayAm-switch"
                checked={switchState.tuesdayAm}
                onChange={handleChange}
                label="AM"
              />
            </Col>
            <Col>
              <Form.Check
                name="tuesdayPm"
                type="switch"
                id="tuesdayPm-switch"
                checked={switchState.tuesdayPm}
                onChange={handleChange}
                label="PM"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>WEDNESDAY</p>
            </Col>
            <Col>
              <Form.Check
                name="wednesdayAm"
                type="switch"
                id="wednesdayAm-switch"
                checked={switchState.wednesdayAm}
                onChange={handleChange}
                label="AM"
              />
            </Col>
            <Col>
              <Form.Check
                name="wednesdayPm"
                type="switch"
                id="wednesdayPm-switch"
                checked={switchState.wednesdayPm}
                onChange={handleChange}
                label="PM"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>THURSDAY</p>
            </Col>
            <Col>
              <Form.Check
                name="thursdayAm"
                type="switch"
                id="thursdayAm-switch"
                checked={switchState.thursdayAm}
                onChange={handleChange}
                label="AM"
              />
            </Col>
            <Col>
              <Form.Check
                name="thursdayPm"
                type="switch"
                id="thursdayPm-switch"
                checked={switchState.thursdayPm}
                onChange={handleChange}
                label="PM"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>FRIDAY</p>
            </Col>
            <Col>
              <Form.Check
                name="fridayAm"
                type="switch"
                id="fridayAm-switch"
                checked={switchState.fridayAm}
                onChange={handleChange}
                label="AM"
              />
            </Col>
            <Col>
              <Form.Check
                name="fridayPm"
                type="switch"
                id="fridayPm-switch"
                checked={switchState.fridayPm}
                onChange={handleChange}
                label="PM"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>SATURDAY</p>
            </Col>
            <Col>
              <Form.Check
                name="saturdayAm"
                type="switch"
                id="saturdayAm-switch"
                checked={switchState.saturdayAm}
                onChange={handleChange}
                label="AM"
              />
            </Col>
            <Col>
              <Form.Check
                name="saturdayPm"
                type="switch"
                id="saturdayPm-switch"
                checked={switchState.saturdayPm}
                onChange={handleChange}
                label="PM"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>SUNDAY</p>
            </Col>
            <Col>
              <Form.Check
                name="sundayAm"
                type="switch"
                id="sundayAm-switch"
                checked={switchState.sundayAm}
                onChange={handleChange}
                label="AM"
              />
            </Col>
            <Col>
              <Form.Check
                name="sundayPm"
                type="switch"
                id="sundayPm-switch"
                checked={switchState.sundayPm}
                onChange={handleChange}
                label="PM"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              {/* <Form.Button>
                                <Button type="submit" className="btn-primary">Submit</Button>
                            </Form.Button> */}
            </Col>
          </Row>
        </Form>
      </Container>
    </main>
  );
};

export default Availability;
