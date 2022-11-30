import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { getUserId } from "../utils/getUserId";
import Auth from "../utils/auth";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { UPDATE_AVAILABILITY } from "../utils/mutations";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/spinner.css";

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
  // const [availability, setAvailability] = useState();

  // setup update availability upon toggle
  const [updateAvailability] = useMutation(UPDATE_AVAILABILITY);

  const userId = getUserId();

  // eslint-disable-next-line
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { id: userId },
    // if skip is true, this query will not be executed; in this instance, if the user is not logged in this query will be skipped when the component mounts
    skip: !Auth.loggedIn(),
    onCompleted: (data) => {
      let availability = data.me.availability;

      Object.keys(availability).map((key) => {
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
          : setSundayPm(availability[key]);
      });
    },
  });

  async function handleChange(evt) {
    // console.log(evt.target.name, evt.target.name === "mondayAm");

    let name = evt.target.name;

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
          mondayAm: name === "mondayAm" ? !mondayAm : mondayAm,
          mondayPm: name === "mondayPm" ? !mondayPm : mondayPm,
          tuesdayAm: name === "tuesdayAm" ? !tuesdayAm : tuesdayAm,
          tuesdayPm: name === "tuesdayPm" ? !tuesdayPm : tuesdayPm,
          wednesdayAm: name === "wednesdayAm" ? !wednesdayAm : wednesdayAm,
          wednesdayPm: name === "wednesdayPm" ? !wednesdayPm : wednesdayPm,
          thursdayAm: name === "thursdayAm" ? !thursdayAm : thursdayAm,
          thursdayPm: name === "thursdayPm" ? !thursdayPm : thursdayPm,
          fridayAm: name === "fridayAm" ? !fridayAm : fridayAm,
          fridayPm: name === "fridayPm" ? !fridayPm : fridayPm,
          saturdayAm: name === "saturdayAm" ? !saturdayAm : saturdayAm,
          saturdayPm: name === "saturdayPm" ? !saturdayPm : saturdayPm,
          sundayAm: name === "sundayAm" ? !sundayAm : sundayAm,
          sundayPm: name === "sundayPm" ? !sundayPm : sundayPm,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //mutation to edit this employees "Availability"
  };

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
      <main>
        <Container>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col sm={12}>
                <Table striped bordered hover variant="dark" className="mt-3">
                  <thead>
                    <tr>
                      <th>Day of the Week</th>
                      <th>AM</th>
                      <th>PM</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Sunday</td>
                      <td>
                        <Form.Check
                          name="sundayAm"
                          type="switch"
                          id="sundayAm-switch"
                          checked={sundayAm || false}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Form.Check
                          name="sundayPm"
                          type="switch"
                          id="sundayPm-switch"
                          checked={sundayPm || false}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Monday</td>
                      <td>
                        <Form.Check
                          name="mondayAm"
                          type="switch"
                          id="mondayAm-switch"
                          checked={mondayAm || false}
                          // onClick={loadChange}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Form.Check
                          name="mondayPm"
                          type="switch"
                          id="mondayPm-switch"
                          checked={mondayPm || false}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Tuesday</td>
                      <td>
                        <Form.Check
                          name="tuesdayAm"
                          type="switch"
                          id="tuesdayAm-switch"
                          checked={tuesdayAm || false}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Form.Check
                          name="tuesdayPm"
                          type="switch"
                          id="tuesdayPm-switch"
                          checked={tuesdayPm || false}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Wedenesday</td>
                      <td>
                        <Form.Check
                          name="wednesdayAm"
                          type="switch"
                          id="wednesdayAm-switch"
                          checked={wednesdayAm || false}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Form.Check
                          name="wednesdayPm"
                          type="switch"
                          id="wednesdayPm-switch"
                          checked={wednesdayPm || false}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Thursday</td>
                      <td>
                        <Form.Check
                          name="thursdayAm"
                          type="switch"
                          id="thursdayAm-switch"
                          checked={thursdayAm || false}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Form.Check
                          name="thursdayPm"
                          type="switch"
                          id="thursdayPm-switch"
                          checked={thursdayPm || false}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Friday</td>
                      <td>
                        <Form.Check
                          name="fridayAm"
                          type="switch"
                          id="fridayAm-switch"
                          checked={fridayAm || false}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Form.Check
                          name="fridayPm"
                          type="switch"
                          id="fridayPm-switch"
                          checked={fridayPm || false}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td>
                        <Form.Check
                          name="saturdayAm"
                          type="switch"
                          id="saturdayAm-switch"
                          checked={saturdayAm || false}
                          onChange={handleChange}
                        />
                      </td>
                      <td>
                        <Form.Check
                          name="saturdayPm"
                          type="switch"
                          id="saturdayPm-switch"
                          checked={saturdayPm || false}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Form>
        </Container>
      </main>
    );
  }
};

export default Availability;
