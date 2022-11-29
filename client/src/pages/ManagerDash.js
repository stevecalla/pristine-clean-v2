import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import 'bootstrap/dist/css/bootstrap.min.css';

import AllEmployeesCont from '../components/AllEmployeesCont'
import AllLocationsCont from '../components/AllLocationsCont'
// import FullCalendar from '../components/FullCalendar'


const ManagerDash = () => {

    const [openEmployee, setOpenEmployee] = useState(true);
    const [openLocation, setOpenLocation] = useState(false);

    return (
        <Container>
            {/* <Row>
                <Col>
                    <FullCalendar />
                </Col>
            </Row> */}
            <Row>
                <Col>
                    <Button
                        onClick={() => setOpenEmployee(!openEmployee)}
                        aria-controls="example-fade-text"
                        aria-expanded={openEmployee}
                        size="lg"
                        className="btn-block my-2"
                    >
                        All Locations
                    </Button>
                    <Collapse  
                    // style={{'height': '300px', 'overflow': 'scroll!important'}} 
                    in={openEmployee}>
                        <div id="collapse-employee-bar">
                            <AllLocationsCont />
                        </div>
                    </Collapse>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button
                        onClick={() => setOpenLocation(!openLocation)}
                        aria-controls="example-fade-text"
                        aria-expanded={openLocation}
                        size="lg"
                        className="btn-block my-2"
                    >
                        All Employees
                    </Button>
                    <Collapse  
                    // style={{'height': '500px', 'overflow': 'scroll!important'}} 
                    in={openLocation}>
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
