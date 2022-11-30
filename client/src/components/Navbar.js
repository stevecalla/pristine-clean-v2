import React, { useState } from "react";
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
import SignUpForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Auth from "../utils/auth";

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            Google Books Search
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              {/* if user is logged in show saved books & logout nav links else show login/signup modal */}
              {/* {Auth.loggedIn() ? ( */}
                <>
                  {/* <Nav.Link as={Link} to="/" eventKey="1">
                    Search For Books
                  </Nav.Link>
                  <Nav.Link as={Link} to="/saved" eventKey="2">
                    See Your Books
                  </Nav.Link> */}
                  {/* <Nav.Link onClick={Auth.logout}>Logout</Nav.Link> */}
                </>
              {/* ) : ( */}
                <>
                  <NavDropdown
                    id="nav-dropdown-example"
                    title="Dashboard"
                    menuvariant="dark"
                  >
                    <NavDropdown.Item as={Link} to="/employeedash" eventKey="3">
                      Employee
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/managerdash" eventKey="4">
                      Manager
                    </NavDropdown.Item>
                  </NavDropdown>
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
                  <Nav.Link as={Link} to="/location" eventKey="9">
                    Location Page
                  </Nav.Link>
                  <Nav.Link as={Link} to="/map" eventKey="8">
                    Map Page
                  </Nav.Link>
                  <Nav.Link onClick={() => setShowModal(true)}>
                    Login/Sign Up
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              )}
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
                  <LoginForm setShowModal={setShowModal}/>
                  {/* <Nav.Link eventKey="login">Login</Nav.Link> */}
                </Nav.Item>
                <Nav.Item>
                  <SignUpForm  setShowModal={setShowModal}/>
                  {/* <Nav.Link eventKey="signup">Sign Up</Nav.Link> */}
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
