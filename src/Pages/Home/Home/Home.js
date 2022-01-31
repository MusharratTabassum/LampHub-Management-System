import React from 'react';
import Banner from '../Banner/Banner';
import Collection from '../Collection/Collection';
import ItemShowcasing from '../ItemShowcasing/ItemShowcasing';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Collection></Collection>
            <ItemShowcasing></ItemShowcasing>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;