import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Reviews.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://murmuring-beyond-96223.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <div>
            <>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        {
                            reviews.map(review => (<Review
                                key={review.id}
                                review={review}
                            ></Review>))
                        }
                    </SwiperSlide>
                </Swiper>
            </>

        </div >
    );
};

export default Reviews;