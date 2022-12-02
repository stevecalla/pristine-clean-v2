import React, { useState } from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PersonX } from 'react-bootstrap-icons';
import { XSquareFill, Check2Circle } from 'react-bootstrap-icons';


import { useQuery } from "@apollo/client";
// // query all employees and locations
import { QUERY_USERS } from "../utils/queries";

const AllEmployeesCont = () => {
  const [openAvailability, setOpenAvailability] = useState(false);
  // const []

  const { loading, data } = useQuery(QUERY_USERS);
  if (!loading) {
    console.log(data.users)
  };



  // // const { loadingEmployees, employeesData } = useQuery(QUERY_USERS);
  // const { employees } = useQuery({ query: QUERY_USERS });
  // console.log(employees);

  // // const employees = employeesData?.employees || [];
  if (!loading) {
    return (
      <>
        {data.users.map((employee, index) => (
          <Card key={index} className="m-2">
            <Card.Header className="container">
              <Row className="justify-content-between">
                <Col xs={10}>
                  <p>{employee.firstName ? employee.firstName : "No First Name"} {employee.lastName ? employee.lastName : "No Last Name"} (UserName: {employee.username})</p>
                </Col>
                <Col xs={1.5}>
                    <PersonX id="delete-employee" color="red" size="24px" className="mr-2" />
                </Col>
              </Row>
            </Card.Header>
            <Card.Body className=" bg-light">
              <ListGroup variant="flush">
                <ListGroup.Item>Phone: {employee.cell ? employee.cell : "No Phone Yet"}</ListGroup.Item>
                <ListGroup.Item>Email: {employee.email ? employee.email: "No Email Yet"}</ListGroup.Item>
                <ListGroup.Item>
                  {/* TODO: View Availability Button opens all availability tables, need to open only target */}
                  <Button
                    onClick={() => setOpenAvailability(!openAvailability)}
                    aria-controls="example-fade-text"
                    aria-expanded={openAvailability}
                    size="lg"
                    className="btn-block my-2"
                  >
                    View Availability
                  </Button>
                  <Collapse
                    // style={{'height': '300px', 'overflow': 'scroll!important'}}
                    in={openAvailability}
                  >
                    <div id="collapse-availability-bar">
                      <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th>Day</th>
                            <th>AM</th>
                            <th>PM</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Sunday</td>
                            <td>{employee.availability.sundayAm ? <Check2Circle color="green" /> : <XSquareFill color="red" />}</td>
                            <td>{employee.availability.sundayPm ? <Check2Circle color="green" /> : <XSquareFill color="red" />}</td>
                          </tr>
                          <tr>
                            <td>Monday</td>
                            <td>{employee.availability.mondayAm ? <Check2Circle color="green" /> : <XSquareFill color="red" />}</td>
                            <td>{employee.availability.mondayPm ? <Check2Circle color="green" /> : <XSquareFill color="red" />}</td>
                          </tr>
                          <tr>
                            <td>Tuesday</td>
                            <td>{employee.availability.tuesdayAm ? <Check2Circle color="green" /> : <XSquareFill color="red" />}</td>
                            <td>{employee.availability.tuesdayPm ? <Check2Circle color="green" /> : <XSquareFill color="red" />}</td>
                          </tr>
                          <tr>
                            <td>Wednesday</td>
                            <td>{employee.availability.wednesdayAm ? <Check2Circle color="green" /> : <XSquareFill color="red" />}</td>
                            <td>{employee.availability.wednesdayPm ? <Check2Circle color="green" /> : <XSquareFill color="red" />}</td>
                          </tr>
                          <tr>
                            <td>Thursday</td>
                            <td>{employee.availability.thursdayAm ? <Check2Circle color="green" /> : <XSquareFill color="red" />}</td>
                            <td>{employee.availability.thursdayPm ? <Check2Circle color="green" /> : <XSquareFill color="red" />}</td>
                          </tr>
                          <tr>
                            <td>Friday</td>
                            <td>{employee.availability.fridayAm ? <Check2Circle color="green" /> : <XSquareFill color="red" />}</td>
                            <td>{employee.availability.fridayPm ? <Check2Circle color="green" /> : <XSquareFill color="red" />}</td>
                          </tr>
                          <tr>
                            <td>Saturday</td>
                            <td>{employee.availability.saturdayAm ? <Check2Circle color="green" /> : <XSquareFill color="red" />}</td>
                            <td>{employee.availability.saturdayPm ? <Check2Circle color="green" /> : <XSquareFill color="red" />}</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Collapse>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        ))
        }
      </>
      // <> <Card className="m-2">
      //   <Card.Header>
      //     Ratcliff, Patrick
      //   </Card.Header>
      //   <Card.Body className=" bg-light">
      //     <ListGroup variant="flush">
      //       <ListGroup.Item>ID: 12345</ListGroup.Item>
      //       <ListGroup.Item>303-123-4567</ListGroup.Item>
      //       <ListGroup.Item>pratcliff5@gmail.com</ListGroup.Item>
      //       <ListGroup.Item></ListGroup.Item>
      //     </ListGroup>
      //   </Card.Body>
      // </Card>
      //   <Card className="m-2">
      //     <Card.Header>
      //       Cleveland, Alex
      //     </Card.Header>
      //     <Card.Body className=" bg-light">
      //       <ListGroup variant="flush">
      //         <ListGroup.Item>ID: 54321</ListGroup.Item>
      //         <ListGroup.Item>720-123-5678</ListGroup.Item>
      //         <ListGroup.Item>alex@alex.com</ListGroup.Item>
      //         <ListGroup.Item></ListGroup.Item>
      //       </ListGroup>
      //     </Card.Body>
      //   </Card>
      //   <Card className="m-2">
      //     <Card.Header>
      //       Mcnatt, Colin
      //     </Card.Header>
      //     <Card.Body className=" bg-light">
      //       <ListGroup variant="flush">
      //         <ListGroup.Item>ID: 54321</ListGroup.Item>
      //         <ListGroup.Item>303-098-7654</ListGroup.Item>
      //         <ListGroup.Item>colin@colin.com</ListGroup.Item>
      //         <ListGroup.Item></ListGroup.Item>
      //       </ListGroup>
      //     </Card.Body>
      //   </Card>
      //   <Card className="m-2">
      //     <Card.Header>
      //       Calla, Steve
      //     </Card.Header>
      //     <Card.Body className=" bg-light">
      //       <ListGroup variant="flush">
      //         <ListGroup.Item>ID: 54321</ListGroup.Item>
      //         <ListGroup.Item>303-098-7654</ListGroup.Item>
      //         <ListGroup.Item>steve@steve.com</ListGroup.Item>
      //         <ListGroup.Item></ListGroup.Item>
      //       </ListGroup>
      //     </Card.Body>
      //   </Card>
      //   <Card className="m-2">
      //     <Card.Header>
      //       Fittipaldi, Emerson
      //     </Card.Header>
      //     <Card.Body className=" bg-light">
      //       <ListGroup variant="flush">
      //         <ListGroup.Item>ID: 000000</ListGroup.Item>
      //         <ListGroup.Item>970-456-1234</ListGroup.Item>
      //         <ListGroup.Item>fitii@fitti.com</ListGroup.Item>
      //         <ListGroup.Item></ListGroup.Item>
      //       </ListGroup>
      //     </Card.Body>
      //   </Card>
      // </>
    )
  }
};


export default AllEmployeesCont;
