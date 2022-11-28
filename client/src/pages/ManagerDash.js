import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FullCalendar from "../components/FullCalendar";

import AllEmployeesCont from "../components/AllEmployeesCont";
import AllLocationsCont from "../components/AllLocationsCont";

import { getUserId } from "../utils/getUserId";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";

const ManagerDash = () => {
  const userId = getUserId();
  console.log(userId);

  // get user info to render to page
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { id: userId },
    // if skip is true, this query will not be executed; in this instance, if the user is not logged in this query will be skipped when the component mounts
    skip: !Auth.loggedIn(),
  });
  console.log({ data }, loading);

  return (
    <>
      <Row className="m-2">
        <Col className="col-12">
          <FullCalendar />
        </Col>
      </Row>
      <Row className="m-2 justify-content-center">
        {/* <Col className='col-12'> */}
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                All Employees
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <AllEmployeesCont />
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                All Locations
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <AllLocationsCont />
              </div>
            </div>
          </div>
        </div>
        {/* </Col> */}
      </Row>
    </>
  );
};

export default ManagerDash;
