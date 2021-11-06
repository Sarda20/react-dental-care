import { Container, Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';


const Services = () => {
    const [services] = useServices();
    return (

        <Container style={{ marginTop: '50px', marginBottom: '50px' }}>
            <h1 style={{ fontWeight: 'bold', marginBottom: '50px' }}>OUR <span style={{ color: 'teal' }}>SERVICES</span></h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;