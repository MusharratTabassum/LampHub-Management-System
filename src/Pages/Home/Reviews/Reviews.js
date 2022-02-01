import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';


import "./Reviews.css";

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://secure-crag-28279.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div>
            <div id="tours">
                <h2 className="text-center fw-bold my-5 py-3 service-title">What Our Client Say About Us
                </h2>
                <div className="container" data-aos="zoom-in-up" data-aos-duration="1000">
                    <div className="row row-cols-1 row-cols-md-3 mb-5">
                        {
                            reviews.map(review => (<Review
                                key={review.id}
                                review={review}
                            ></Review>))
                        }
                    </div>
                </div>
            </div>


        </div >
    );
};

export default Reviews;