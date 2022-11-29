// import React, { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

// import { useQuery } from "@apollo/client";
// // // query all employees and locations
// import { QUERY_EMPLOYEES, QUERY_LOCATIONS } from "../utils/queries";

// function Incident() {
//   // Execute the query on component load
//   const { loadingEmployees, employeesData } = useQuery(QUERY_EMPLOYEES);
//   const { loadingLocations, locationsData } = useQuery(QUERY_LOCATIONS);
//   console.log(loadingEmployees, loadingLocations);
//   // Use Form.Optional chaining to check if data exists and if it has an employee property. If not, return an empty array to use.
//   const employees = employeesData?.employees || [];
//   const locations = locationsData?.employees || [];

//   const [employeeName, setEmployeeName] = useState([0]);
//   const [location, setLocation] = useState([0]);
//   const [incident, setIncident] = useState("");
//   const [emergency, setEmergency] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleInputChange = (e) => {
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     if (inputType === "employee") {
//       setEmployeeName(inputValue);
//     } else if (inputType === "location") {
//       setLocation(inputValue);
//     } else if (inputType === "incident") {
//       setIncident(inputValue);
//     } else {
//       setEmergency(inputValue);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     if (!employeeName) {
//       setErrorMessage("You must select your name");
//       return;
//     }

//     if (!location) {
//       setErrorMessage("You must select the location of the incident");
//       return;
//     }

//     if (incident.length < 1) {
//       setErrorMessage("You must enter a description of the incident");
//       return;
//     }

//     if (emergency) {
//       setErrorMessage("Contact the manager for this location ASAP!");
//     }

//     alert(`Thank you for your submission ${employeeName}!`);

//     setEmployeeName([0]);
//     setLocation([0]);
//     setIncident("");
//     setEmergency(false);
//   };

//   return (
//     <main>
//       <Container>
//         <Row>
//           <Col>
//             <Form onSubmit={handleFormSubmit}>
//               <Row className="justify-content-center m-2">
//                 <select
//                   className="form-select name-form-select"
//                   onChange={handleInputChange}
//                 >
//                   <option>Select Name</option>
//                   {employees.map((employee) => (
//                     <option
//                       value={employee._id}
//                       id="employee"
//                       name="employeeName"
//                       type="employee"
//                     >
//                       {employee.last}, {employee.first}
//                     </option>
//                   ))}
//                 </select>
//               </Row>
//               <Row className="justify-content-center m-2">
//                 <select className="form-select location-form-select">
//                   <option>Select Location</option>
//                   {locations.map((location) => (
//                     <option
//                       value={location._id}
//                       onChange={handleInputChange}
//                       id="location"
//                       name="location"
//                       type="location"
//                     >
//                       {location.business}
//                     </option>
//                   ))}
//                 </select>
//               </Row>
//               <Row className="justify-content-center m-2">
//                 <div>
//                   <label
//                     htmlFor="exampleFormControlTextarea1"
//                     className="form-label"
//                   >
//                     Enter Description of Incident
//                   </label>
//                   <textarea
//                     className="form-control incident-form-text"
//                     value={incident.incident}
//                     onChange={handleInputChange}
//                     id="incident"
//                     name="incident"
//                     rows="3"
//                   ></textarea>
//                 </div>
//               </Row>
//               <Row className="justify-content-center m-2">
//                 <div>
//                   <input
//                     className="form-check-input"
//                     onChange={handleInputChange}
//                     type="checkbox"
//                     value="emergency"
//                     id="emergency"
//                   ></input>
//                   <label
//                     className="form-check-label"
//                     htmlFor="flexCheckDefault"
//                   >
//                     Is this an emergency?
//                   </label>
//                 </div>
//               </Row>
//               <Row className="justify-content-center m-2">
//                 <div>
//                   <Button type="submit" className="btn-primary">
//                     Submit
//                   </Button>
//                 </div>
//               </Row>
//               <Row className="justify-content-center m-2">
//                 <p className="error-text text-danger">{errorMessage}</p>
//               </Row>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </main>
//   );
// }

// export default Incident;

import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styles/Contact.css";

function Incident() {
  const [name, setName] = useState("");
  const [locationName, setlocationName] = useState("");
  const [subject, setSubject] = useState("");
  const [cc, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [areAllFieldsFilled, setAreAllFieldsFilled] = useState(true);

  const [showNameValidation, setShowNameValidation] = useState(false);
  const [showlocationNameValidation, setShowlocationNameValidation] = useState(false);
  const [showEmailValidation, setShowEmailValidation] = useState(false);
  const [showSubjectValidation, setShowSubjectValidation] = useState(false);
  const [showBodyValidation, setShowBodyValidation] = useState(false);

  // Getting the value or name of input triggering change
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    name === "name"
      ? setName(value)
      : name === "cc"
      ? setEmail(value)
      : name === "subject"
      ? setSubject(value)
      : name === "locationName"
      ? setlocationName(value)
      : setBody(value);

    return name;
  };

  // If all fields are populated then enable the submit button
  useEffect(() => {
    setAreAllFieldsFilled(
      name.trim() !== "" && locationName.trim() !== "" && cc.trim() !== "" && subject.trim() !== "" && body.trim() !== ""
    );
  }, [name, locationName, cc, subject, body]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    launchEmailPlatform();
    resetForm();
  };

  // Open preferred email provide and proppulate
  const launchEmailPlatform = () => {
    window.open(
      `mailto:callasteven@gmail.com?name=${name}&cc=${cc}&subject=${subject}&body=Employee Name: ${name}%0D%0A%0D%0ALocation Name: ${locationName}%0D%0A%0D%0ASubject: ${body}`
    );
    return false;
  };

  // Reset form fields with blank entries
  const resetForm = () => {
    setName("");
    setlocationName("");
    setSubject("");
    setEmail("");
    setBody("");
  };

  // If user clicks off an input field without entering text, then validation message "is required" displays
  const handleBlurChange = (e) => {
    const { name, value } = e.target;

    name === "name" && value.trim() === "" ? setShowNameValidation (true) : setShowNameValidation(false);
    name === "locationName" && value.trim() === "" ? setShowlocationNameValidation (true) : setShowlocationNameValidation(false);
    name === "cc" && value.trim() === "" ? setShowEmailValidation (true) : setShowEmailValidation(false);
    name === "subject" && value.trim() === "" ? setShowSubjectValidation (true) : setShowSubjectValidation(false);
    name === "body" && value.trim() === "" ? setShowBodyValidation (true) : setShowBodyValidation(false); 
  };

  return (
    <Form
      className="p-3 overflow-auto custom-about"
      onSubmit={handleFormSubmit}
    >
      <h1 className="display-4 custom-text">Incident Report Form</h1>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <div className="form-label">
          <Form.Label>Employee Name</Form.Label>
          <Form.Label className={`validation-color ${showNameValidation ? "show": "hide"}`}>* field is required</Form.Label>
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
          <Form.Label className={`validation-color ${showlocationNameValidation ? "show": "hide"}`}>* field is required</Form.Label>
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
          <Form.Label>Email address</Form.Label>
          <Form.Label className={`validation-color ${showEmailValidation ? "show": "hide"}`}>* field is required</Form.Label>
        </div>
        <Form.Control
          className="custom-border"
          type="email"
          placeholder="Enter email"
          value={cc}
          name="cc"
          onChange={handleInputChange}
          onBlur={handleBlurChange}
          required
        />
        <Form.Text className="text-muted">
          I'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <div className="form-label">
          <Form.Label>Subject</Form.Label>
          <Form.Label className={`validation-color ${showSubjectValidation ? "show": "hide"}`}>* field is required</Form.Label>
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

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <div className="form-label">
          <Form.Label>Message</Form.Label>
          <Form.Label className={`validation-color ${showBodyValidation ? "show": "hide"}`}>* field is required</Form.Label>
        </div>
        {/* <Form.Label>Message</Form.Label> */}
        <Form.Control
          className="custom-border"
          as="textarea"
          rows={2}
          type="textarea"
          placeholder="Enter your message"
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
        Email Steve
      </Button>
    </Form>
  );
}

export default Incident;
