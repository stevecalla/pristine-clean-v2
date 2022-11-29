import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const EmployeeLocationsCont = ({ locations }) => {
  // if (!locations?.length) {
  //   return <h3>No jobs yet!</h3>;
  // }

  return (
    <>
      {/* {locations.map((location) => (
        <Card key={location._id}>
          <Card.Header>{location.business}</Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
              <ListGroup.Item>{location.frequency}</ListGroup.Item>
              <ListGroup.Item>{location.laborHours}</ListGroup.Item>
              <ListGroup.Item>{location.manager}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      ))} */}
      <Row>
        <Col>
      <Card className="m-2">
          <Card.Header>Wal-Mart</Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
            <ListGroup.Item>Frequency:
                    <ListGroup variant="flush">
                      <ListGroup.Item>Tuesday</ListGroup.Item>
                      <ListGroup.Item>Friday</ListGroup.Item>
                      <ListGroup.Item>Sunday</ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
              <ListGroup.Item>Manager: Mcnatt, Colin</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="m-2">
          <Card.Header>Wal-Mart</Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
            <ListGroup.Item>Frequency:
                    <ListGroup variant="flush">
                      <ListGroup.Item>Tuesday</ListGroup.Item>
                      <ListGroup.Item>Friday</ListGroup.Item>
                      <ListGroup.Item>Sunday</ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
              <ListGroup.Item>Manager: Mcnatt, Colin</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="m-2">
          <Card.Header>Wal-Mart</Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
            <ListGroup.Item>Frequency:
                    <ListGroup variant="flush">
                      <ListGroup.Item>Tuesday</ListGroup.Item>
                      <ListGroup.Item>Friday</ListGroup.Item>
                      <ListGroup.Item>Sunday</ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
              <ListGroup.Item>Manager: Mcnatt, Colin</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="m-2">
          <Card.Header>Wal-Mart</Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
            <ListGroup.Item>Frequency:
                    <ListGroup variant="flush">
                      <ListGroup.Item>Tuesday</ListGroup.Item>
                      <ListGroup.Item>Friday</ListGroup.Item>
                      <ListGroup.Item>Sunday</ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
              <ListGroup.Item>Manager: Mcnatt, Colin</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="m-2">
          <Card.Header>Wal-Mart</Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
            <ListGroup.Item>Frequency:
                    <ListGroup variant="flush">
                      <ListGroup.Item>Tuesday</ListGroup.Item>
                      <ListGroup.Item>Friday</ListGroup.Item>
                      <ListGroup.Item>Sunday</ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
              <ListGroup.Item>Manager: Mcnatt, Colin</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="m-2">
          <Card.Header>Wal-Mart</Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
            <ListGroup.Item>Frequency:
                    <ListGroup variant="flush">
                      <ListGroup.Item>Tuesday</ListGroup.Item>
                      <ListGroup.Item>Friday</ListGroup.Item>
                      <ListGroup.Item>Sunday</ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
              <ListGroup.Item>Manager: Mcnatt, Colin</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="m-2">
          <Card.Header>Wal-Mart</Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
            <ListGroup.Item>Frequency:
                    <ListGroup variant="flush">
                      <ListGroup.Item>Tuesday</ListGroup.Item>
                      <ListGroup.Item>Friday</ListGroup.Item>
                      <ListGroup.Item>Sunday</ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
              <ListGroup.Item>Manager: Mcnatt, Colin</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="m-2">
          <Card.Header>Wal-Mart</Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
            <ListGroup.Item>Frequency:
                    <ListGroup variant="flush">
                      <ListGroup.Item>Tuesday</ListGroup.Item>
                      <ListGroup.Item>Friday</ListGroup.Item>
                      <ListGroup.Item>Sunday</ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
              <ListGroup.Item>Manager: Mcnatt, Colin</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="m-2">
          <Card.Header>Wal-Mart</Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
            <ListGroup.Item>Frequency:
                    <ListGroup variant="flush">
                      <ListGroup.Item>Tuesday</ListGroup.Item>
                      <ListGroup.Item>Friday</ListGroup.Item>
                      <ListGroup.Item>Sunday</ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
              <ListGroup.Item>Manager: Mcnatt, Colin</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="m-2">
          <Card.Header>Wal-Mart</Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
            <ListGroup.Item>Frequency:
                    <ListGroup variant="flush">
                      <ListGroup.Item>Tuesday</ListGroup.Item>
                      <ListGroup.Item>Friday</ListGroup.Item>
                      <ListGroup.Item>Sunday</ListGroup.Item>
                    </ListGroup>
                  </ListGroup.Item>
              <ListGroup.Item>Manager: Mcnatt, Colin</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        </Col>
        </Row>
    </>
  );
};

export default EmployeeLocationsCont;
