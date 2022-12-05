import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, NavDropdown } from "react-bootstrap";
import Auth from "../utils/auth";

import { NavStarsAsset } from "../components/NavStarsAsset";
import "../styles/nav-bar-style.css";

const AppNavbar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        className="shadow-sm"
        style={{ backgroundColor: "black" }}
        fixed="top"
        variant="dark"
        expand="lg"
      >
        <Container fluid className="pl-0">
          <Navbar.Brand as={Link} reloadDocument to="/">
            <Row>
              <NavStarsAsset className="mb-1 ml-0 pl-0 nav-stars-style" />
              <h2 className="m-0 pt-1 heading-style">Pristine Clean</h2>
            </Row>
          </Navbar.Brand>
          <Row>
            <Navbar.Toggle
              aria-controls="navbar"
              className="white toggle-style mr-3"
            />
          </Row>
          <Navbar.Collapse id="navbar" className="text-white">
            <Nav className="ml-auto">
              {/* if user is logged in show saved books & logout nav links else show login/signup modal */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link
                    as={Link}
                    to="/dashboard"
                    eventKey="4"
                    className="text-white"
                  >
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
                      Time Off Request
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/incident" eventKey="7">
                      Incident Report
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      reloadDocument
                      as={Link}
                      to="/incidentlist"
                      eventKey="8"
                    >
                      Incident List
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link onClick={Auth.logout} className="text-white">
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link
                    reloadDocument
                    as={Link}
                    to="/login"
                    eventKey="10"
                    className="text-white"
                  >
                    Login
                  </Nav.Link>
                  <Nav.Link
                    reloadDocument
                    as={Link}
                    to="/signup"
                    eventKey="10"
                    className="text-white"
                  >
                    Sign Up
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
