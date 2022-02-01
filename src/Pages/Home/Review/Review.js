import React from 'react';
import img from './qoute.png'

const Review = ({ review }) => {
    const { user_name, review_us, ratings } = review;

    return (
        <div>
            <div className='col '>
                <div className='d-flex justify-content-center py-3 align-items-center'>
                    <div className="card shadow-lg" style={{ width: "18rem" }}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item"><img src={img} className='d-flex justify-content-end align-items-center' style={{ height: "30px" }} alt="" /></li>
                            <li className="list-group-item">{review_us}</li>
                            <li className="list-group-item">{ratings}/5.0</li>
                        </ul>
                        <div className="card-footer" style={{ fontWeight: "700" }}>
                            {user_name}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Review;