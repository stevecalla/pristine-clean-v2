import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Collapse from "react-bootstrap/Collapse";
import { useQuery } from "@apollo/client";
import { QUERY_INCIDENTS } from "../utils/queries";




const IncidentList = () => {

    const { loading, data } = useQuery(QUERY_INCIDENTS);
    let incidents;
    if (!loading) {
        incidents = data.incidents;
        console.log(incidents);
    }


    if (!loading) {
        return (
            <>
                {incidents.map((incident) => (
                    <Card key={incident._id} className="shadow border border-secondary">
                        <Card.Header className="container">
                            <Row className="justify-content-between">
                                <Col xs={10}>{incident.locationName}</Col>

                            </Row>
                        </Card.Header>
                        <Card.Body className=" bg-light">
                            <ListGroup variant="flush">
                                <ListGroup.Item><b>Subject:</b> {incident.subject} </ListGroup.Item>
                                <ListGroup.Item><b>Employee:</b> {incident.employeeName} </ListGroup.Item>
                                <ListGroup.Item><b>Phone:</b> {incident.employeePhone} </ListGroup.Item>
                                <ListGroup.Item><b>Urgency:</b> {incident.urgent}</ListGroup.Item>
                                <ListGroup.Item><b>Details:</b> {incident.incidentDetails} </ListGroup.Item>

                            </ListGroup>
                        </Card.Body>
                    </Card>
                ))}
            </>
        )
    }



};

export default IncidentList;