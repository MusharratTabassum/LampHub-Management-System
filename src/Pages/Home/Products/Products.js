import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div>
            <div id="tours">
                <h1 className="text-center fw-bold my-5 py-3 service-title">Now Available Products on Online
                </h1>
                <div className="container" data-aos="zoom-in-up" data-aos-duration="1000">
                    <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                        {
                            products.slice(0, 6).map(product => (<Product
                                key={product.id}
                                product={product}
                            ></Product>))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;