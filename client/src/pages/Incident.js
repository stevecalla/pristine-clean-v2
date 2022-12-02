import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "../styles/Contact.css";
import { useQuery } from "@apollo/client";
import { QUERY_INCIDENTS } from "../utils/queries";
// import { ADD_INCIDENT, DELETE_INCIDENT } from "../utils/mutations";

function Incident() {
  const [name, setName] = useState("");
  const [locationName, setlocationName] = useState("");
  const [subject, setSubject] = useState("");
  const [telNo, setTelNo] = useState("");
  const [body, setBody] = useState("");
  const [isUrgent, setIsUrgent] = useState("Not Urgent");
  const [areAllFieldsFilled, setAreAllFieldsFilled] = useState(true);

  const [showNameValidation, setShowNameValidation] = useState(false);
  const [showlocationNameValidation, setShowlocationNameValidation] =
    useState(false);
  const [showTelNoValidation, setShowTelNoValidation] = useState(false);
  const [showSubjectValidation, setShowSubjectValidation] = useState(false);
  const [showBodyValidation, setShowBodyValidation] = useState(false);

  // Getting the value or name of input triggering change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    console.log(e.target, e.target.checked);

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    name === "name"
      ? setName(value)
      : name === "telNo"
      ? setTelNo(value)
      : name === "subject"
      ? setSubject(value)
      : name === "urgent"
      ? setIsUrgent(value)
      : name === "urgent"
      ? setSubject(value)
      : name === "locationName"
      ? setlocationName(value)
      : setBody(value);

    return name;
  };

  // If all fields are populated then enable the submit button
  useEffect(() => {
    setAreAllFieldsFilled(
      name.trim() !== "" &&
        locationName.trim() !== "" &&
        telNo.trim() !== "" &&
        subject.trim() !== "" &&
        isUrgent.trim() !== "" &&
        body.trim() !== ""
    );
  }, [name, locationName, telNo, subject, isUrgent, body]);

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   launchEmailPlatform();
  //   resetForm();
  // };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    launchEmailPlatform();
    resetForm();
  };

  // Open preferred email provide and proppulate
  const launchEmailPlatform = () => {
    console.log(isUrgent);
    window.open(
      `mailto:colinmichael89@gmail.com?name=${name}&telNo=${telNo}&subject=${isUrgent}: ${subject}&body=Status: ${isUrgent}%0D%0A%0D%0Employee Name: ${name}%0D%0A%0D%0AEmployee Phone: ${telNo}%0D%0A%0D%0ALocation Name: ${locationName}%0D%0A%0D%0AIncident Information: ${body}`
    );
    return false;
  };

  // Reset form fields with blank entries
  const resetForm = () => {
    setName("");
    setlocationName("");
    setSubject("");
    setTelNo("");
    setBody("");
  };

  // If user clicks off an input field without entering text, then validation message "is required" displays
  const handleBlurChange = (e) => {
    const { name, value } = e.target;

    name === "name" && value.trim() === ""
      ? setShowNameValidation(true)
      : setShowNameValidation(false);
    name === "locationName" && value.trim() === ""
      ? setShowlocationNameValidation(true)
      : setShowlocationNameValidation(false);
    name === "telNo" && value.trim() === ""
      ? setShowTelNoValidation(true)
      : setShowTelNoValidation(false);
    name === "subject" && value.trim() === ""
      ? setShowSubjectValidation(true)
      : setShowSubjectValidation(false);
    name === "body" && value.trim() === ""
      ? setShowBodyValidation(true)
      : setShowBodyValidation(false);
  };

  // const { loading, data } = useQuery(QUERY_INCIDENTS);
  // let incidents;
  // if (!loading) {
  //   incidents = data;
  //   console.log(incidents);
  // }

  // const handleChecked = (e) => {
  //   setIsUrgent((current) => !current);

  //   if (e.target.checked) {
  //     console.log("✅ Checkbox is checked", isUrgent);
  //   } else {
  //     console.log("⛔️ Checkbox is NOT checked", isUrgent);
  //   }
  // };

  return (
    <div className="d-flex flex-column align-items-center">
      <Form
        className="p-3 overflow-auto custom-about"
        onSubmit={handleFormSubmit}
        style={{ width: "80vw" }}
      >
        <h1 className="display-5 custom-text">Incident Form</h1>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="form-label">
            <Form.Label>Employee Name</Form.Label>
            <Form.Label
              className={`validation-color ${
                showNameValidation ? "show" : "hide"
              }`}
            >
              * field is required
            </Form.Label>
          </div>
          <Form.Control
            className="custom-border"
            type="text"
            placeholder="Enter Employee Name"
            value={name}
            name="name"
            onChange={handleInputChange}
            onBlur={handleBlurChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="form-label">
            <Form.Label>Location Name</Form.Label>
            <Form.Label
              className={`validation-color ${
                showlocationNameValidation ? "show" : "hide"
              }`}
            >
              * field is required
            </Form.Label>
          </div>
          <Form.Control
            className="custom-border"
            type="text"
            placeholder="Enter Location Name"
            value={locationName}
            name="locationName"
            onChange={handleInputChange}
            onBlur={handleBlurChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="form-label">
            <Form.Label>Employee Phone</Form.Label>
            <Form.Label
              className={`validation-color ${
                showTelNoValidation ? "show" : "hide"
              }`}
            >
              * field is required
            </Form.Label>
          </div>
          <Form.Control
            className="custom-border"
            type="tel"
            placeholder="Enter phone 123-456-7890"
            value={telNo}
            name="telNo"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            onChange={handleInputChange}
            onBlur={handleBlurChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <div className="form-label">
            <Form.Label>Subject</Form.Label>
            <Form.Label
              className={`validation-color ${
                showSubjectValidation ? "show" : "hide"
              }`}
            >
              * field is required
            </Form.Label>
          </div>
          <Form.Control
            className="custom-border"
            type="text"
            placeholder="Enter subject"
            value={subject}
            name="subject"
            onChange={handleInputChange}
            onBlur={handleBlurChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <div className="form-label">
            <Form.Label>Urgent</Form.Label>
            <Form.Label
              className={`validation-color ${
                showSubjectValidation ? "show" : "hide"
              }`}
            >
              * field is required
            </Form.Label>
          </div>
          <Form.Control
            className="custom-border"
            type="text"
            placeholder="Urgent / Not Urgent"
            value={isUrgent}
            name="urgent"
            onChange={handleInputChange}
            onBlur={handleBlurChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <div className="form-label">
            <Form.Label>Incident Details</Form.Label>
            <Form.Label
              className={`validation-color ${
                showBodyValidation ? "show" : "hide"
              }`}
            >
              * field is required
            </Form.Label>
          </div>
          {/* <Form.Label>Message</Form.Label> */}
          <Form.Control
            className="custom-border"
            as="textarea"
            rows={4}
            type="textarea"
            placeholder="Enter incident details such as date, time, importance, client interaction, and details"
            value={body}
            name="body"
            onChange={handleInputChange}
            onBlur={handleBlurChange}
            required
          />
        </Form.Group>

        <Button
          className="button-custom"
          variant="primary"
          type="submit"
          disabled={!areAllFieldsFilled}
          title="Enter all fields to send email"
        >
          Send Email
        </Button>
      </Form>
      {/* {incidents.map((incident, index) => ( */}
      {/* <Card key={2}>
        <Card.Header className="container">
          <Row className="justify-content-between">
            <Col xs={10}>name</Col>

          </Row>
        </Card.Header>
        <Card.Body className=" bg-light">
          <ListGroup variant="flush">
            <ListGroup.Item>Address: </ListGroup.Item>
            <ListGroup.Item>Days: </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card> */}
      {/* ))} */}
    </div>
  );
}

export default Incident;
