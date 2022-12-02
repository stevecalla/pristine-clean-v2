import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Modal,
  Tab,
  NavDropdown,
} from "react-bootstrap";
import Auth from "../utils/auth";

import { NavStarsAsset } from "../components/NavStarsAsset"

const AppNavbar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        style={{ backgroundColor: "black" }}
        variant="dark"
        expand="lg"
      >
        <Container fluid className="pl-0">
          
          <Navbar.Brand as={Link} reloadDocument to="/">
            <Row>
            <NavStarsAsset className="mb-1"/>
            <h2 className="m-0 pt-1" style={{ fontFamily: 'Georgia, Times New Roman, serif'}}>Pristine Clean</h2>
            </Row>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="navbar" className="white" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              {/* if user is logged in show saved books & logout nav links else show login/signup modal */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to="/dashboard" eventKey="4" className="text-white" >
                    Dashboard
                  </Nav.Link>
                  <NavDropdown
                    id="nav-dropdown-example"
                    title={<span className="text-white">Forms</span>}
                    menuvariant="dark"
                  >
                    <NavDropdown.Item
                      reloadDocument
                      as={Link}
                      to="/availability"
                      eventKey="5"
                    >
                      Availability
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/timeoff" eventKey="6">
                      Request Time-Off
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/incident" eventKey="7">
                      Incident Report
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link onClick={Auth.logout} className="text-white" >Logout</Nav.Link>
                </>
              ) : (
                <>
                  (
                  <Nav.Link reloadDocument as={Link} to="/login" eventKey="10" className="text-white" >
                    Login
                  </Nav.Link>
                  <Nav.Link reloadDocument as={Link} to="/signup" eventKey="10" className="text-white" >
                    Sign Up
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default AppNavbar;
