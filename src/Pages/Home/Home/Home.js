import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Client from '../Client/Client';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Team></Team>
            <Client></Client>
        </div>
    );
};

export default Home;