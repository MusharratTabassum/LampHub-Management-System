import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Banner/Banner';

const Explore = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://secure-crag-28279.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <div id="tours">
                <h1 className="text-center fw-bold my-5 py-3 service-title">Our Products
                </h1>
                <div className="container" data-aos="zoom-in-up" data-aos-duration="1000">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                        {
                            products.map(product => (<Product
                                key={product.id}
                                product={product}
                            ></Product>))
                        }
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Explore;