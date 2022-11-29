import React from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { useQuery } from "@apollo/client";
// // query all employees and locations
import { QUERY_EMPLOYEES } from "../utils/queries";

const AllEmployeesCont = () => {
  const { loadingEmployees, employeesData } = useQuery(QUERY_EMPLOYEES);
  console.log(loadingEmployees);

  const employees = employeesData?.employees || [];

  return (
    <>
      {/* {employees.map((employee) => (
        <Card>
          <Card.Header>
            {employee.firstName}, {employee.lastName}
          </Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
              <ListGroup.Item>{employee._id}</ListGroup.Item>
              <ListGroup.Item>{employee.cell}</ListGroup.Item>
              <ListGroup.Item>{employee.email}</ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      ))} */}
      <Card className="m-2">
          <Card.Header>
            Ratcliff, Patrick
          </Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
              <ListGroup.Item>ID: 12345</ListGroup.Item>
              <ListGroup.Item>303-123-4567</ListGroup.Item>
              <ListGroup.Item>pratcliff5@gmail.com</ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="m-2">
          <Card.Header>
            Cleveland, Alex
          </Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
              <ListGroup.Item>ID: 54321</ListGroup.Item>
              <ListGroup.Item>720-123-5678</ListGroup.Item>
              <ListGroup.Item>alex@alex.com</ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="m-2">
          <Card.Header>
            Mcnatt, Colin
          </Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
              <ListGroup.Item>ID: 54321</ListGroup.Item>
              <ListGroup.Item>303-098-7654</ListGroup.Item>
              <ListGroup.Item>colin@colin.com</ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="m-2">
          <Card.Header>
            Calla, Steve
          </Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
              <ListGroup.Item>ID: 54321</ListGroup.Item>
              <ListGroup.Item>303-098-7654</ListGroup.Item>
              <ListGroup.Item>steve@steve.com</ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="m-2">
          <Card.Header>
            Fittipaldi, Emerson
          </Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
              <ListGroup.Item>ID: 000000</ListGroup.Item>
              <ListGroup.Item>970-456-1234</ListGroup.Item>
              <ListGroup.Item>fitii@fitti.com</ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
    </>
  );
};

export default AllEmployeesCont;
