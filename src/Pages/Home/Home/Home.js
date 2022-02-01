import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Collection from '../Collection/Collection';
import ItemShowcasing from '../ItemShowcasing/ItemShowcasing';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <Collection></Collection>
            <ItemShowcasing></ItemShowcasing>
            <Reviews></Reviews>
            <Footer></Footer>

        </div>
    );
};

export default Home;