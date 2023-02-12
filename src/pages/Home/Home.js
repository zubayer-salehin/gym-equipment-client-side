import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery';
import Shop from './Shop';

const Home = () => {
    return (
        <div>
            <Banner />
            <Shop />
            <Gallery />
        </div>
    );
};

export default Home;