import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <Container fluid id='footer-container'>
            <Row xs={1} md={2} lg={2}>
                <Col>
                    <h1>Working Hours</h1>
                    <Table responsive="sm" responsive="md" responsive="lg" striped bordered hover>
                        <thead>
                            <tr>
                                <th>Mon-Wed</th>
                                <th>8:00 AM – 7:00 PM</th>
                            </tr>
                            <tr>
                                <th>Thu</th>
                                <th>8:00 AM – 5:00 PM</th>
                            </tr>
                            <tr>
                                <th>Fri</th>
                                <th>8:00 AM – 5:00 PM</th>
                            </tr>
                            <tr>
                                <th>Sat – Sun</th>
                                <th>Closed</th>
                            </tr>
                        </thead>
                    </Table>
                </Col>
                <Col id='footer-text'>
                    <h1>Contact Details</h1>
                    <p>Madison Avenue 7, NY, US</p>
                    <p>office@dentalcare.com</p>
                    <p>+0800 2336 7811</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Footer;