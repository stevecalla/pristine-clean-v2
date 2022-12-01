import React from "react";

// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { InfoCircleFill } from 'react-bootstrap-icons';
import Auth from "../utils/auth";
import { getUserId } from "../utils/getUserId";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

const AllLocationsCont = () => {
  const userId = getUserId();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { id: userId },
    skip: !Auth.loggedIn(),
  });

  let locations;
  if (!loading) {
    locations = data.me.locations;
  }
  // // console.log(locations);

  if (!loading) {
    return (
      <>
        {locations.map((location, index) => (
          <Card key={index}>
            <Card.Header className="container">
              <Row className="justify-content-between">
                <Col xs={10}>
                  {location.businessName}
                </Col>
                <Col xs={1.5}>
                  {/* TODO: NOT SURE THIS LINK IS GOING TO WORK */}
                  <Link to={'/location'} component={location._id} replace={true}>
                    <Button>
                      <InfoCircleFill id="link-location-page" color="lightBlue" size="22px" className="mr-2" />
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body className=" bg-light">
              <ListGroup variant="flush">
                <ListGroup.Item>Address: {location.address}</ListGroup.Item>
                <ListGroup.Item>Days: {location.shifts}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        ))}
      </>
      // <>
      //        <Card className="m-2">
      //     <Card.Header>Walmart</Card.Header>
      //     <Card.Body className=" bg-light">
      //       <ListGroup variant="flush">
      //         <ListGroup.Item>ID: 123456</ListGroup.Item>
      //         <ListGroup.Item>1234 Cedar Wood Ln</ListGroup.Item>
      //       </ListGroup>
      //     </Card.Body>
      //   </Card>
      //   <Card className="m-2">
      //     <Card.Header>Target</Card.Header>
      //     <Card.Body className=" bg-light">
      //       <ListGroup variant="flush">
      //         <ListGroup.Item>ID: 123456</ListGroup.Item>
      //         <ListGroup.Item>1234 Cedar Wood Ln</ListGroup.Item>
      //       </ListGroup>
      //     </Card.Body>
      //   </Card>
      //   <Card className="m-2">
      //     <Card.Header>K-Mart</Card.Header>
      //     <Card.Body className=" bg-light">
      //       <ListGroup variant="flush">
      //         <ListGroup.Item>ID: 123456</ListGroup.Item>
      //         <ListGroup.Item>1234 Cedar Wood Ln</ListGroup.Item>
      //       </ListGroup>
      //     </Card.Body>
      //   </Card>
      //   <Card className="m-2">
      //     <Card.Header>Big Lots</Card.Header>
      //     <Card.Body className=" bg-light">
      //       <ListGroup variant="flush">
      //         <ListGroup.Item>ID: 123456</ListGroup.Item>
      //         <ListGroup.Item>1234 Cedar Wood Ln</ListGroup.Item>
      //       </ListGroup>
      //     </Card.Body>
      //   </Card>
      //   <Card className="m-2">
      //     <Card.Header className="container">
      //       <Row className="justify-content-between">
      //         <Col xs={10}>
      //           Dollar General
      //         </Col>
      //         <Col xs={1.5}>
      //         <InfoCircleFill color="lightBlue" size="22px" className="mr-2" />
      //         </Col>
      //       </Row>
      //     </Card.Header>
      //     <Card.Body className=" bg-light">
      //       <ListGroup variant="flush">
      //         <ListGroup.Item>ID: 123456</ListGroup.Item>
      //         <ListGroup.Item>1234 Cedar Wood Ln</ListGroup.Item>
      //       </ListGroup>
      //     </Card.Body>
      //   </Card>
      // </> 
    );
  }
};

export default AllLocationsCont;
