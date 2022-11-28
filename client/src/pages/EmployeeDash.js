import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getUserId } from "../utils/getUserId";

import { useQuery } from "@apollo/client";
// import { QUERY_SINGLE_EMPLOYEE } from "../utils/queries";
import { QUERY_LOCATIONS } from "../utils/queries";

import EmployeeLocationsCont from "../components/EmployeeLocationsCont";
import FullCalendar from "../components/FullCalendar";

const EmployeeDash = () => {
  const userId = getUserId();
  console.log(userId)

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
