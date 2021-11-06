import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const Booking = () => {
    let { id } = useParams();
    const [serviceDetails, setServicedetails] = useState([]);
    const [singleService, setSingleservice] = useState({});

    useEffect(() => {
        fetch("/services.json")
            .then((res) => res.json())
            .then((data) => setServicedetails(data));
    }, [])

    useEffect(() => {
        const serviceFound = serviceDetails.find((service) => service.id == id);
        setSingleservice(serviceFound);
    }, [serviceDetails])


    return (
        <Container fluid className='mt-5 mb-5'>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Card bg='light' style={{ border: '2px solid black' }}>
                        <Card.Img variant="top" src={singleService?.img} />
                        <Card.Body style={{ textAlign: 'justify' }}>
                            <Card.Title style={{ fontWeight: 'bold' }}>{singleService?.name}</Card.Title>
                            <Card.Text>
                                {singleService?.description}
                            </Card.Text>
                            <h6>Number of Days Required : {singleService?.days}</h6>
                            <h5>Total Cost : {singleService?.cost}</h5>
                            <Link to='/confirm'>
                                <Button style={{ backgroundColor: 'darkblue' }}>Book a Visit</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Booking;