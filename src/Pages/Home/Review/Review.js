import React from 'react';
import { Link } from 'react-router-dom';
import img from './qoute.png'

const Review = ({ review }) => {
    const { _id, title, short_description, image, price } = review;

    return (
        <div>
            <div className='col'>
                <div className="card shadow-lg p-3 ">
                    <img src={image} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body text-start">
                        <h5 className="card-title fw-bold">{title}</h5>
                        <p className="card-text text-danger">{price}tk/Person</p>
                        <p className="card-text">{short_description}</p>
                    </div>
                    <div class="card-footer ">
                        <Link to={`/serviceDetail/${_id}`}>
                            <button>Details</button>
                        </Link>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Review;