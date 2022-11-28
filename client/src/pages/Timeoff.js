import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import Form from 'react-bootstrap/Form';

// import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";

import "react-datepicker/dist/react-datepicker.css";

const Timeoff = () => {
  registerLocale("es", es);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  // const [errorMessage, setErrorMessage] = useState("");
  const [errorMessage ] = useState("");

  // const handleFormSubmit = (e) => {

  //     e.preventDefault();

  //     if (!startDate) {
  //         setErrorMessage('You must select a start date/time');
  //         return;
  //     };

  //     if (!endDate) {
  //         setErrorMessage('You must select an end date/time');
  //         return;
  //     };

  //     setStartDate('');
  //     setEndDate('');

  // };

  return (
    <main>
      <Container>
        {/* <Form
                    onSubmit={handleFormSubmit}
                > */}
        <Row className="justify-content-center">
          <Col xs={4} md={3} lg={2}>
            <p>Start Date</p>
          </Col>
          <Col xs={4} md={3} lg={2}>
            {/* <Form.Input> */}
            <DatePicker
              name="startDate"
              locale="es"
              value={startDate}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              dateFormat="Pp"
            />
            {/* </Form.Input> */}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={4} md={3} lg={2}>
            <p>End Date</p>
          </Col>
          <Col xs={4} md={3} lg={2}>
            {/* <Form.Input> */}
            <DatePicker
              name="endDate"
              locale="es"
              value={endDate}
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              showTimeSelect
              dateFormat="Pp"
            />
            {/* </Form.Input> */}
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={4}>
            {/* <Form.Button> */}
            <Button type="submit" className="btn-primary">
              Submit
            </Button>
            <p className="error-text">{errorMessage}</p>
            {/* </Form.Button> */}
          </Col>
        </Row>
        {/* </Form> */}
      </Container>
    </main>
  );
};

export default Timeoff;
