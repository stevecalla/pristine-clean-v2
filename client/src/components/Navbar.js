import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Modal,
  Tab,
  NavDropdown,
} from "react-bootstrap";
// import Dropdown from "react-bootstrap/Dropdown";
import SignUpFormOld from "./SignupFormOld";
import LoginFormOld from "./LoginFormOld";
import Auth from "../utils/auth";

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(false)

  // useEffect(() => {
  //     Auth.loggedIn()
  // },[loggedIn])
  console.log(Auth.loggedIn);
  console.log(!Auth.loggedIn);
  return (
    <>
      <Navbar collapseOnSelect style={{ backgroundColor: 'black' }} variant="dark" expand="lg">
        <Container fluid className="pl-0">
          <Navbar.Brand as={Link} reloadDocument to="/">
            <h1>Pristine Clean</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" className="white" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
            {/* section */}
              {Auth.loggedIn() ? (
                  <>
                    <Nav.Link as={Link} to="/dashboard" eventKey="4">
                      Dashboard
                    </Nav.Link>
                    <NavDropdown
                      id="nav-dropdown-example"
                      title="Forms"
                      menuvariant="dark"
                    >
                      <NavDropdown.Item reloadDocument as={Link} to="/availability" eventKey="5">
                        Availability
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/timeoff" eventKey="6">
                        Request Time-Off
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/incident" eventKey="7">
                        Incident Report
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                  </>
                ) : (
                  <Nav.Link as={Link} to="/login" eventKey="10">
                    Login/Sign Up
                  </Nav.Link>
                )}
              {/* section */}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* set up modal data */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        {/* <Tab.Container defaultActiveKey="login"> */}
        <Tab.Container>
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <LoginFormOld setShowModal={setShowModal} />
                  {/* <Nav.Link eventKey="login">Login</Nav.Link> */}
                </Nav.Item>
                <Nav.Item>
                  <SignUpFormOld setShowModal={setShowModal} />
                  {/* <Nav.Link eventKey="signup">Sign Up</Nav.Link> */}
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginFormOld />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpFormOld />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
