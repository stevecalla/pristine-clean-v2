import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { useQuery } from "@apollo/client";
// query all locations
import { QUERY_LOCATIONS } from "../utils/queries";

const AllLocationsCont = () => {
  // Execute the query on component load
  const { loadingLocation, locationData } = useQuery(QUERY_LOCATIONS);
  // Use Form.Optional chaining to check if data exists and if it has an business property. If not, return an empty array to use.
  const locations = locationData?.business || [];
  return (
    <>
      {/* h1 location.business */}
      {/*  li location.manager */}
      {/*  li location.cleaners */}
      {/*  li location.cleaners */}
      {locations.map((location) => (
        <Card>
          <Card.Header>{location.businessName}</Card.Header>
          <Card.Body className=" bg-light">
            <ListGroup variant="flush">
              <ListGroup.Item>{location._id}</ListGroup.Item>
              <ListGroup.Item>{location.address}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default AllLocationsCont;
