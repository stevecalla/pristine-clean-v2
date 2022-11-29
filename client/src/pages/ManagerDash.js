import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import 'bootstrap/dist/css/bootstrap.min.css';

import AllEmployeesCont from '../components/AllEmployeesCont'
import AllLocationsCont from '../components/AllLocationsCont'
import FullCalendar from '../components/FullCalendar'


const ManagerDash = () => {

    const [open, setOpen] = useState(false);
    const [openLocation, setOpenLocation] = useState(false);

    return (
        <Container>
            <Row>
                <Col>
                    <FullCalendar />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button
                        onClick={() => setOpen(!open)}
                        aria-controls="example-fade-text"
                        aria-expanded={open}
                        size="lg"
                        className="btn-block my-2"
                    >
                        All Locations
                    </Button>
                    <Collapse in={open}>
                        <div id="collapse-employee-bar">
                            <AllLocationsCont />
                        </div>
                    </Collapse>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button
                        onClick={() => setOpenLocation(!open)}
                        aria-controls="example-fade-text"
                        aria-expanded={open}
                        size="lg"
                        className="btn-block my-2"
                    >
                        All Employees
                    </Button>
                    <Collapse in={openLocation}>
                        <div id="collapse-location-bar">
                            <AllEmployeesCont />
                        </div>
                    </Collapse>
                </Col>
            </Row>
        </Container>
    )
}

export default ManagerDash;
