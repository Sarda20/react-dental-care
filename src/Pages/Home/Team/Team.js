import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Team.css'

const Team = () => {
    return (
        <Container fluid id='container'>
            <h1 id='title'>OUR DENTAL TEAM</h1>
            <Row xs={1} md={2} lg={2}>
                <Col>

                    <img src="https://i.ibb.co/R6kGBTH/happy-young-woman-smiling-23-2148396164-1.jpg" alt="" style={{ width: '350px', height: '400px' }} />

                </Col>
                <Col id='text-container'>
                    <h1>Hellen Hill</h1>
                    <h3>Dentist</h3>
                    <h5 style={{ color: 'black', paddingRight: '150px' }}>Dr. Hellen Hill is is dedicated to providing her patients with the most beautiful smile together with the best dental protection available nowadays.</h5>
                    <Link to="/experts"><Button style={{ marginTop: '40px' }}>View More</Button></Link>

                </Col>
            </Row>
        </Container>
    );
};

export default Team;