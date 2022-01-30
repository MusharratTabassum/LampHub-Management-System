import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination, FreeMode } from "swiper";

const ItemShowcasing = () => {
    return (
        <div className='mt-5'>
            <h1 className='mt-5'>Follow Us On Instagram</h1>
            <h4 className='mb-5'>Use <b>#myLampHub</b> to be featured
            </h4>
            <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    slidesPerGroup={3}
                    freeMode={true}
                    loopFillGroupWithBlank={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, FreeMode]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="https://static.pxlecdn.com/photos/465882814/square_medium/a6be32ab20ca3e06088d.jpg" style={{ width: '450px', height: "450px" }} alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://static.pxlecdn.com/photos/468790407/square_medium/b2a11c4e797979b3879f.jpg" style={{ width: '450px', height: "450px" }} alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://static.pxlecdn.com/photos/468563614/square_medium/29d1ac58dd214b8c9cd2.jpg" style={{ width: '450px', height: "450px" }} alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://static.pxlecdn.com/photos/465444880/square_medium/324bbe4bbb062a6fbb34.jpg" style={{ width: '450px', height: "450px" }} alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://static.pxlecdn.com/photos/463951515/square_medium/371d8a9ac4ec32de0372.jpg" style={{ width: '450px', height: "450px" }} alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://static.pxlecdn.com/photos/463053462/square_medium/507e70332b7a8c2ca539.jpg" style={{ width: '450px', height: "450px" }} alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://static.pxlecdn.com/photos/462704241/square_medium/b3b7098cd8a909f05c5d.jpg" style={{ width: '450px', height: "450px" }} alt="" /></SwiperSlide>

                    <SwiperSlide><img src="https://static.pxlecdn.com/photos/461801682/square_medium/a508b72ec89061a382f3.jpg" style={{ width: '450px', height: "450px" }} alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://static.pxlecdn.com/photos/459946812/square_medium/1bbc43e3f022592a2fd7.jpg" style={{ width: '450px', height: "450px" }} alt="" /></SwiperSlide>

                </Swiper>
            </>


        </div>
    );
};

export default ItemShowcasing;