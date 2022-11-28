import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getUserId } from "../utils/getUserId";

import { useQuery } from "@apollo/client";
// import { QUERY_SINGLE_EMPLOYEE } from "../utils/queries";
import { QUERY_LOCATIONS } from "../utils/queries";

import EmployeeLocationsCont from "../components/EmployeeLocationsCont";
import FullCalendar from "../components/FullCalendar";

import { QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";

const EmployeeDash = () => {
  const userId = getUserId();
  console.log(userId)

    // get user info to render to page
    const { loading, data } = useQuery(QUERY_ME, {
      variables: { id: userId },
      // if skip is true, this query will not be executed; in this instance, if the user is not logged in this query will be skipped when the component mounts
      skip: !Auth.loggedIn(),
    });
    console.log({data}, loading);

  // Execute the query on component load
  // const { loading, data } = useQuery(QUERY_SINGLE_EMPLOYEE);
  const { loadingLocations, locationsData } = useQuery(QUERY_LOCATIONS);
  console.log(loadingLocations);

  // Use optional chaining to check if data exists and if it has an employee property. If not, return an empty array to use.
  // const employee = data?.employee || [];

  // if (loading) {
  //     return <div>Loading...</div>;
  // }
  return (
    <>
      <Row>
        <Col>
          {/* {loading ? (
                        <div>Loading Jobs...</div>
                    ) : ( */}
          <EmployeeLocationsCont locations={locationsData} />
          {/* )} */}
          <p>TESTING</p>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* {loading ? (
                        <div>Loading Calendar...</div>
                    ) : ( */}
          <FullCalendar />
          {/* )} */}
        </Col>
      </Row>
    </>
  );
};

export default EmployeeDash;
