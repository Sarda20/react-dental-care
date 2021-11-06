import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Client = () => {
    return (
        <>
            <h1 style={{ fontWeight: 'bold', marginBottom: '50px' }}>CLIENT <span style={{ color: 'teal' }}>TESTIMONIALS
            </span></h1>
            <Container style={{ marginBottom: '50px' }}>
                <Row style={{ marginLeft: '120px' }} xs={1} md={2} lg={2} className="g-4">
                    <Col>
                        <Card bg='dark' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.ibb.co/r5h88Qp/caucasian-male-dentist-examining-young-woman-patient-s-teeth-dental-clinic-158595-7625-1.jpg" />
                            <Card.Body style={{ color: 'white' }}>
                                <Card.Title>Alexa Hales</Card.Title>
                                <Card.Text>
                                    Dental Care is the best dental clinic that I came across because of its World class treatment with all the advance technologies.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card bg='dark' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.ibb.co/cT5vVHh/little-boy-patient-dentist-1303-24386-1.jpg" />
                            <Card.Body style={{ color: 'white' }} >
                                <Card.Title>Martin Wade</Card.Title>
                                <Card.Text>
                                    In dental care any patient will get the best treatment from all the amazing doctors out there and they will try to give their best.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container >
        </>
    );
};

export default Client;