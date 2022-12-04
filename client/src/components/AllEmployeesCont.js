import React, { useState } from "react";
import format_phone from "../utils/helpers";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PersonX } from "react-bootstrap-icons";
import { XSquareFill, Check2Circle } from "react-bootstrap-icons";
import { useQuery, useMutation } from "@apollo/client";

// query all employees and locations
import { QUERY_USERS } from "../utils/queries";
import { DELETE_USER } from "../utils/mutations";


const AllEmployeesCont = () => {
  const [openAvailability, setOpenAvailability] = useState(false);

  // delete User query
  const [deleteUser] = useMutation(DELETE_USER);

  // delete USER
  const handleDeleteUSER = async (userId) => {
    try {
      const { data } = await deleteUser({
        variables: {
          id: userId,
        },
      });

      console.log(data); //to eliminate console warning

      window.location.reload();

    } catch (err) {
      console.log(err);
    }
  };

  // get User query
  const { loading, data } = useQuery(QUERY_USERS);
  if (!loading) {
    // console.log(data.users)
  }

  // // const { loadingEmployees, employeesData } = useQuery(QUERY_USERS);
  // const { employees } = useQuery({ query: QUERY_USERS });
  // console.log(employees);

  const getElement = (event) => {
    let currentAvailTarget = event.currentTarget.getAttribute("data-target");
    let currentAvailTable = document.getElementById(currentAvailTarget);
    if (currentAvailTable.classList.contains("show")) {
      currentAvailTable.classList.remove("show");
      setOpenAvailability(false);
    } else {
      currentAvailTable.classList.add("show");
      setOpenAvailability(true);
    }
  };

  // // const employees = employeesData?.employees || [];
  if (loading) {
    return (
      <div>
        No employees
      </div>
    )
  } else if (!loading) {
    // if (!loading) {
    return (
      <>
        {data.users?.map((employee, index) => (
          <Card key={index} className="m-2 shadow border border-secondary">
            <Card.Header className="container">
              <Row className="justify-content-between">
                <Col xs={10}>
                  <p>
                    {employee.firstName ? employee.firstName : "No First Name"}{" "}
                    {employee.lastName ? employee.lastName : "No Last Name"}{" "}
                    (Username: {employee.username})
                  </p>
                </Col>
                <Col xs={1.5}>
                  <PersonX
                    id="delete-employee"
                    color="red"
                    size="24px"
                    className="mr-2"
                    data-user={employee._id}
                    //section

                    onClick={(event) => {
                      console.log(event.currentTarget.getAttribute('data-user'));
                      let userId = event.currentTarget.getAttribute('data-user');
                      handleDeleteUSER(userId)
                    }}

                  //section
                  />
                </Col>
              </Row>
            </Card.Header>
            <Card.Body className=" bg-light">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Phone #:{" "}
                  {employee.cell && format_phone(employee.cell)
                    ? format_phone(employee.cell)
                    : "No Phone Yet"}
                  {/* Phone #: {employee.cell ? employee.cell : "No Phone Yet"} */}
                </ListGroup.Item>
                <ListGroup.Item>
                  Email: {employee.email ? employee.email : "No Email Yet"}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    // onClick={() => setOpenAvailability(!openAvailability)}
                    onClick={(event) => getElement(event)}
                    aria-controls="example-fade-text"
                    aria-expanded={openAvailability}
                    size="lg"
                    className="btn-block my-2"
                    data-target={`#collapseTarget-${index}`}
                  >
                    View Availability
                  </Button>

                  <Collapse
                  // style={{'height': '300px', 'overflow': 'scroll!important'}}
                  // in={openAvailability}
                  >
                    <div id={`#collapseTarget-${index}`}>
                      {/* <div id={`collapse-availability-bar-${index}`}> */}
                      <Table striped bordered hover size="sm">
                        <thead>
                          <tr>
                            <th>Day</th>
                            <th style={{ textAlign: "center" }}>AM</th>
                            <th style={{ textAlign: "center" }}>PM</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Sunday</td>
                            <td style={{ textAlign: "center" }}>
                              {employee.availability.sundayAm ? (
                                <Check2Circle color="green" />
                              ) : (
                                <XSquareFill color="red" />
                              )}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {employee.availability.sundayPm ? (
                                <Check2Circle color="green" />
                              ) : (
                                <XSquareFill color="red" />
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>Monday</td>
                            <td style={{ textAlign: "center" }}>
                              {employee.availability.mondayAm ? (
                                <Check2Circle color="green" />
                              ) : (
                                <XSquareFill color="red" />
                              )}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {employee.availability.mondayPm ? (
                                <Check2Circle color="green" />
                              ) : (
                                <XSquareFill color="red" />
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>Tuesday</td>
                            <td style={{ textAlign: "center" }}>
                              {employee.availability.tuesdayAm ? (
                                <Check2Circle color="green" />
                              ) : (
                                <XSquareFill color="red" />
                              )}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {employee.availability.tuesdayPm ? (
                                <Check2Circle color="green" />
                              ) : (
                                <XSquareFill color="red" />
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>Wednesday</td>
                            <td style={{ textAlign: "center" }}>
                              {employee.availability.wednesdayAm ? (
                                <Check2Circle color="green" />
                              ) : (
                                <XSquareFill color="red" />
                              )}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {employee.availability.wednesdayPm ? (
                                <Check2Circle color="green" />
                              ) : (
                                <XSquareFill color="red" />
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>Thursday</td>
                            <td style={{ textAlign: "center" }}>
                              {employee.availability.thursdayAm ? (
                                <Check2Circle color="green" />
                              ) : (
                                <XSquareFill color="red" />
                              )}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {employee.availability.thursdayPm ? (
                                <Check2Circle color="green" />
                              ) : (
                                <XSquareFill color="red" />
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>Friday</td>
                            <td style={{ textAlign: "center" }}>
                              {employee.availability.fridayAm ? (
                                <Check2Circle color="green" />
                              ) : (
                                <XSquareFill color="red" />
                              )}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {employee.availability.fridayPm ? (
                                <Check2Circle color="green" />
                              ) : (
                                <XSquareFill color="red" />
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td>Saturday</td>
                            <td style={{ textAlign: "center" }}>
                              {employee.availability.saturdayAm ? (
                                <Check2Circle color="green" />
                              ) : (
                                <XSquareFill color="red" />
                              )}
                            </td>
                            <td style={{ textAlign: "center" }}>
                              {employee.availability.saturdayPm ? (
                                <Check2Circle color="green" />
                              ) : (
                                <XSquareFill color="red" />
                              )}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Collapse>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }
};

export default AllEmployeesCont;
