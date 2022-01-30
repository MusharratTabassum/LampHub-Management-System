import React from 'react';
import Banner from '../Banner/Banner';
import Collection from '../Collection/Collection';
import ItemShowcasing from '../ItemShowcasing/ItemShowcasing';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Services></Services>
            <Collection></Collection>
            <ItemShowcasing></ItemShowcasing>

        </div>
    );
};

export default Home;