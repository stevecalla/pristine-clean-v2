import React, { useEffect } from "react";
import WrongPageImg from '../assets/WrongPage.png'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";


const WrongPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate("/dashboard"), 5000);
    }, [] )



    return (
        <Container>
            <Row className=" justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
                <Button as={Link} to="/dashboard" className="rounded-pill shadow-lg" style={{ backgroundColor: 'black' }}>
                    <img src={WrongPageImg} alt="404 Wrong Page" style={{ maxHeight: '40vh' }} />
                </Button>
            </Row>
        </Container>
    )
}


export default WrongPage;