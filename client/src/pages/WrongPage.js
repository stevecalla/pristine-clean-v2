import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import wrongPageImg from "../assets/WrongPage.png";
import { Container, Row, Button } from "react-bootstrap/";
import "../styles/button-style.css";

const WrongPage = () => {
  const navigate = useNavigate();


  useEffect(() => {
    setTimeout(() => navigate("/dashboard"), 7000);
  // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Row
        className=" justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <Button
          as={Link}
          to="/dashboard"
          className="rounded-pill wrong-page-button"
          style={{ backgroundColor: "white", border: "none" }}
        >
          <img
            src={wrongPageImg}
            alt="404 Wrong Page"
            style={{ maxHeight: "40vh" }}
          />
        </Button>
      </Row>
    </Container>
  );
};

export default WrongPage;
