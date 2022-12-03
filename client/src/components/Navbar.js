import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
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
              <NavStarsAsset className="mb-1" style={NavStarsStyle} />
              <h2 className="m-0 pt-1" style={HeadingStyle}>Pristine Clean</h2>
            </Row>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" className="white" />
          <Navbar.Collapse id="navbar" className="text-white">
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
                    <NavDropdown.Item as={Link} to="/timeoff" eventKey="6" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
                      Request Time-Off
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/incident" eventKey="7" style={{ fontFamily: 'Georgia, Times New Roman, serif' }}>
                      Incident Report
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link onClick={Auth.logout} className="text-white" >Logout</Nav.Link>
                </>
              ) : (
                <>
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

const NavStarsStyle = {
  position: "absolute",
  top: 0,
  left: 0,
}

const HeadingStyle =
{
  fontFamily: 'Georgia, Times New Roman, serif',
  position: "relative",
  left: -25,
  zIndex: 5
}

export default AppNavbar;
