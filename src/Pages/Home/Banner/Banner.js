import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import slider1 from './images/slider-1.jpg'
import slider2 from './images/slider-2.jpg'
import slider3 from './images/slider-3.jpg'


const Banner = () => {
    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide> <img src={slider1} /></SwiperSlide>
                <SwiperSlide> <img src={slider2} /></SwiperSlide>
                <SwiperSlide> <img src={slider3} /></SwiperSlide>


            </Swiper>
        </>
    );
};

export default Banner;