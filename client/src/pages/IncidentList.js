import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { X } from "react-bootstrap-icons";
import { useQuery, useMutation } from "@apollo/client";

// query incidents & delete incidents
import { QUERY_INCIDENTS } from "../utils/queries";
import { DELETE_INCIDENT } from "../utils/mutations";


const IncidentList = () => {

    // delete incident query
    const [deleteIncident] = useMutation(DELETE_INCIDENT);

    // delete incident
    const handleDeleteIncident = async (incidentId) => {
        try {
            const { data } = await deleteIncident({
                variables: {
                    id: incidentId,
                },
            });
            console.log(data);
            window.location.reload();

        } catch (err) {
            console.log(err)
        }
    };

    // get incidents query
    const { loading, data } = useQuery(QUERY_INCIDENTS);
    let incidents;
    if (!loading) {
        incidents = data.incidents;
        console.log(incidents);
    }


    if (loading) {
        return (
            <div>
                No Incidents
            </div>
        )
    } else if (!loading) {
        return (
            <>
                {incidents.map((incident) => (
                    <Card key={incident._id} className="shadow border border-secondary">
                        <Card.Header className="container">
                            <Row className="justify-content-between">
                                <Col xs={10}>{incident.locationName}</Col>
                                <Col xs={1.5}>
                                    <div>

                                        <X
                                            id="delete-incident"
                                            color="red"
                                            size="28px"
                                            className="mr-2"
                                            data-incident={incident._id}
                                            onClick={(event) => {
                                                console.log(event.currentTarget.getAttribute('data-incident'));
                                                let incidentId = event.currentTarget.getAttribute('data-incident');
                                                handleDeleteIncident(incidentId)
                                            }}

                                        />
                                    </div>
                                    {/* </Button> */}
                                    {/* </Link> */}
                                </Col>

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