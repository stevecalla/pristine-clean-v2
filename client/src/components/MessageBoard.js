import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import firstslide from "../assets/firstslide.svg";
import secondslide from "../assets/secondslide.svg";
import thirdslide from "../assets/thirdslide.svg";

const MessageBoard = () => {
  // set slide prop to true to enable animation
  return (
    <>
      <Carousel className="m-3 p-3" slide={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={firstslide} alt="First slide" />
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={secondslide} alt="Second slide" />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={thirdslide} alt="Third slide" />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3> */}
            <p>
              {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default MessageBoard;
