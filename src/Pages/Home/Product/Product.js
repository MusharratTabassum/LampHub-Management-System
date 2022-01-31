import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, image, price } = product;
    return (
        <div>
            <div className="col" >
                <div >
                    <div className="card shadow-lg p-3 ">
                        <img src={image} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body text-start">
                            <h5 className="card-title fw-bold">{name}</h5>
                            <p className="card-text text-danger">${price}</p>
                        </div>
                        <div class="card-footer ">
                            <Link to={`/productDetail/${_id}`}>
                                <button>Buy Now</button>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Product;