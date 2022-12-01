import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import firstslide from "../assets/firstslide.svg";
import secondslide from "../assets/secondslide.svg";
import thirdslide from "../assets/thirdslide.svg";
import LoginFormCopy from "../components/Home/LoginFormCopy";
// import SignupFormCopy from "../components/SignupFormCopy";
import MessageBoard from "../components/MessageBoard";

const Homepage = () => {
  // set slide prop to true to enable animation
  return (
    <>
      {/* <MessageBoard /> */}

      <LoginFormCopy />

      {/* <SignupFormCopy /> */}
    </>
  );
};

export default Homepage;
