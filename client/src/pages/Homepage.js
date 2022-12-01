import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
// import firstslide from "../assets/firstslide.svg";
// import secondslide from "../assets/secondslide.svg";
// import thirdslide from "../assets/thirdslide.svg";
import LoginFormCopy from "../components/Home/LoginFormCopy";
import SignupFormCopy from "../components/Home/SignupFormCopy";
// import MessageBoard from "../components/MessageBoard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { CleanAsset } from "../components/Home/CleanAsset";

const Homepage = () => {
  const [key, setKey] = useState("login");
  // set slide prop to true to enable animation
  return (
    <>
      {/* <MessageBoard /> */}

      <div className="d-flex flex-column align-items-center mt-3 overflow-auto">
        <div
          style={{
            minHeight: "600px",
            width: "380px",
            margin: "10px",
            boxShadow: "5px 5px 5px 5px gray",
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
            <Tab eventKey="login" title="Login">
              <Row>
                <Col>
                  <LoginFormCopy />
                  {/* <FullCalendarApp /> */}
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="signup" title="Sign Up">
              {/* <AllEmployeesCont /> */}
              <SignupFormCopy />
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Homepage;
