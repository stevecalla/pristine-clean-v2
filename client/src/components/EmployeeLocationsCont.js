import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const EmployeeLocationsCont = ({ locations }) => {
    if (!locations?.length) {
        return <h3>No jobs yet!</h3>;
    }

    return (
        <>
            {locations.map((location) => (
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
                ))}
        </>
    );
};

export default EmployeeLocationsCont;