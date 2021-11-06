import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Expert from "../Expert/Expert";
const Experts = () => {
    const [experts, setExperts] = useState([]);

    useEffect(() => {
        fetch('experts.json')
            .then(res => res.json())
            .then(data => setExperts(data));
    }, [])
    return (
        <Container className='mb-5'>
            <h1 style={{ color: 'purple', fontWeight: 'bold', margin: '40px' }}>OUR DENTAL TEAM</h1>
            <Row xs={1} md={2} lg={2} className="g-4" style={{ marginLeft: '50px' }}>
                {
                    experts.map(exp => <Expert key={exp.id} exp={exp}></Expert>)
                }
            </Row>
        </Container>
    );
};

export default Experts;