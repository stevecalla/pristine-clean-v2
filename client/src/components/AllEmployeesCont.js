import React from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { useQuery } from '@apollo/client';
// // query all employees and locations
import { QUERY_EMPLOYEES } from '../utils/queries';

const AllEmployeesCont = () => {

    const { loadingEmployees, employeesData } = useQuery(QUERY_EMPLOYEES);

    const employees = employeesData?.employees || [];


    return (
        <>
            {employees.map((employee) => (
                <Card>
                    <Card.Header>{employee.firstName}, {employee.lastName}</Card.Header>
                    <Card.Body className=" bg-light">
                        <ListGroup variant="flush">
                            <ListGroup.Item>{employee._id}</ListGroup.Item>
                            <ListGroup.Item>{employee.cell}</ListGroup.Item>
                            <ListGroup.Item>{employee.email}</ListGroup.Item>
                            <ListGroup.Item></ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            ))}
        </>

    )
}

export default AllEmployeesCont;