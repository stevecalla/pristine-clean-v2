import React, { useState } from "react";
import Auth from "../utils/auth";
import LoginForm from "../components/Home/LoginForm";
import SignupForm from "../components/Home/SignupForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { CleanAsset } from "../components/Home/CleanAsset";
import Message from "../components/Home/Message";

const Homepage = ({ tabDisplay }) => {
  const [key, setKey] = useState(tabDisplay || "message");
  // set slide prop to true to enable animation

  return (
    <Container style={{ marginTop: "85px" }}>
      <div className="d-flex flex-column align-items-center mt-3 overflow-auto">
        <div
          style={{
            height: "600px",
            minHeight: "600px",
            width: "330px",
            margin: "10px",
            boxShadow: "5px 5px 5px 5px gray",
            overflowY: "scroll",
          }}
        >
          <div className="mx-4 mt-4 mb-4" style={{ height: "150px" }}>
            <div className="d-flex justify-content-center align-content-center align-item-center">
              <CleanAsset />
            </div>
          </div>

          <Tabs
            id="justify-tab"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className=""
            variant="tabs"
            justify
          >
            <Tab eventKey="message" title="Message">
              <Row>
                <Col>
                  <Message />
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="login" title="Login" disabled={Auth.loggedIn()}>
              <Row>
                <Col>
                  <LoginForm />
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="signup" title="Sign Up" disabled={Auth.loggedIn()}>
              <SignupForm />
            </Tab>
          </Tabs>
        </div>
      </div>
    </Container>
  );
};

export default Homepage;
