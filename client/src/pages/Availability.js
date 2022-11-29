import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { getUserId } from "../utils/getUserId";
import Auth from "../utils/auth";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { UPDATE_AVAILABILITY } from "../utils/mutations";

// import { useQuery } from "@apollo/client";

// import { QUERY_SINGLE_EMPLOYEE } from '../utils/queries';

const Availability = () => {
  const [mondayAm, setMondayAm] = useState();
  const [mondayPm, setMondayPm] = useState();
  const [tuesdayAm, setTuesdayAm] = useState();
  const [tuesdayPm, setTuesdayPm] = useState();
  const [wednesdayAm, setWednesdayAm] = useState();
  const [wednesdayPm, setWednesdayPm] = useState();
  const [thursdayAm, setThursdayAm] = useState();
  const [thursdayPm, setThursdayPm] = useState();
  const [fridayAm, setFridayAm] = useState();
  const [fridayPm, setFridayPm] = useState();
  const [saturdayAm, setSaturdayAm] = useState();
  const [saturdayPm, setSaturdayPm] = useState();
  const [sundayAm, setSundayAm] = useState();
  const [sundayPm, setSundayPm] = useState();

  const userId = getUserId();
  console.log(userId);

  // get user info to render to page
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { id: userId },
    // if skip is true, this query will not be executed; in this instance, if the user is not logged in this query will be skipped when the component mounts
    skip: !Auth.loggedIn(),
  });
  console.log({ data }, loading);
  console.log(data.me.availability);
  let availability = data.me.availability;
  console.log(availability);

  useEffect(() => {

    Object.keys(availability).map((key) => {
      console.log(availability[key])
      return key === "mondayAm"
        ? setMondayAm(availability[key])
        : key === "mondayPm"
        ? setMondayPm(availability[key])
        : key === "tuesdayAm"
        ? setTuesdayAm(availability[key])
        : key === "tuesdayPm"
        ? setTuesdayPm(availability[key])
        : key === "wednesdayAm"
        ? setWednesdayAm(availability[key])
        : key === "wednesdayPm"
        ? setWednesdayPm(availability[key])
        : key === "thursdayAm"
        ? setThursdayAm(availability[key])
        : key === "thursdayPm"
        ? setThursdayPm(availability[key])
        : key === "fridayAm"
        ? setFridayAm(availability[key])
        : key === "fridayPm"
        ? setFridayPm(availability[key])
        : key === "saturdayAm"
        ? setSaturdayAm(availability[key])
        : key === "saturdayPm"
        ? setSaturdayPm(availability[key])
        : key === "sundayAm"
        ? setSundayAm(availability[key])
        : key === "sundayPm"
        ? setSundayPm(availability[key])
        : console.log("error")
    });

    // setSwitchState({...availability});
    // setSundayAm(!sundayAm);
    // Object.keys(availability).map((key) =>
    //   console.log(`${key}: ${availability[key]}`)
    // );

    // eslint-disable-next-line
  }, []);



  // setup remove book graphql mutation
  const [updateAvailability] = useMutation(UPDATE_AVAILABILITY);

  async function handleChange(evt) {
    console.log(evt.target.name, evt.target.name === "mondayAm");

    evt.target.name === "mondayAm"
      ? setMondayAm(!mondayAm)
      : evt.target.name === "mondayPm"
      ? setMondayPm(!mondayPm)
      : evt.target.name === "tuesdayAm"
      ? setTuesdayAm(!tuesdayAm)
      : evt.target.name === "tuesdayPm"
      ? setTuesdayPm(!tuesdayPm)
      : evt.target.name === "wednesdayAm"
      ? setWednesdayAm(!wednesdayAm)
      : evt.target.name === "wednesdayPm"
      ? setWednesdayPm(!wednesdayPm)
      : evt.target.name === "thursdayAm"
      ? setThursdayAm(!thursdayAm)
      : evt.target.name === "thursdayPm"
      ? setThursdayPm(!thursdayPm)
      : evt.target.name === "fridayAm"
      ? setFridayAm(!fridayAm)
      : evt.target.name === "fridayPm"
      ? setFridayPm(!fridayPm)
      : evt.target.name === "saturdayAm"
      ? setSaturdayAm(!saturdayAm)
      : evt.target.name === "saturdayPm"
      ? setSaturdayPm(!saturdayPm)
      : evt.target.name === "sundayAm"
      ? setSundayAm(!sundayAm)
      : evt.target.name === "sundayPm"
      ? setSundayPm(!sundayPm)
      : console.log("error");

    try {
      await updateAvailability({
        variables: {
          id: userId,
          username: "changed_2"
        },
      });
      console.log('changed')

    } catch (err) {
      console.log(err);
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //mutation to edit this employees "Availability"
  };

  // if (loading) {
  //     return <div>Loading...</div>;
  // } else {
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
                checked={mondayAm || false}
                onChange={handleChange}
                label="AM"
              />
            </Col>
            <Col>
              <Form.Check
                name="mondayPm"
                type="switch"
                id="mondayPm-switch"
                checked={mondayPm || false}
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
                checked={tuesdayAm || false}
                onChange={handleChange}
                label="AM"
              />
            </Col>
            <Col>
              <Form.Check
                name="tuesdayPm"
                type="switch"
                id="tuesdayPm-switch"
                checked={tuesdayPm || false}
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
                checked={wednesdayAm || false}
                onChange={handleChange}
                label="AM"
              />
            </Col>
            <Col>
              <Form.Check
                name="wednesdayPm"
                type="switch"
                id="wednesdayPm-switch"
                checked={wednesdayPm || false}
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
                checked={thursdayAm || false}
                onChange={handleChange}
                label="AM"
              />
            </Col>
            <Col>
              <Form.Check
                name="thursdayPm"
                type="switch"
                id="thursdayPm-switch"
                checked={thursdayPm || false}
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
                checked={fridayAm || false}
                onChange={handleChange}
                label="AM"
              />
            </Col>
            <Col>
              <Form.Check
                name="fridayPm"
                type="switch"
                id="fridayPm-switch"
                checked={fridayPm || false}
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
                checked={saturdayAm || false}
                onChange={handleChange}
                label="AM"
              />
            </Col>
            <Col>
              <Form.Check
                name="saturdayPm"
                type="switch"
                id="saturdayPm-switch"
                checked={saturdayPm || false}
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
                checked={sundayAm || false}
                onChange={handleChange}
                label="AM"
              />
            </Col>
            <Col>
              <Form.Check
                name="sundayPm"
                type="switch"
                id="sundayPm-switch"
                checked={sundayPm || false}
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
// };

export default Availability;
