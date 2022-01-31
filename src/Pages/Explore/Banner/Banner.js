import React from 'react';
import img from './banner-qoute.jpg'
const Banner = () => {
    return (
        <div>
            <div className="img-fluid" style={{ background: `radial-gradient(transparent, black), url('${img}`, backgroundSize: 'cover', height: "500px", backgroundBlendMode: 'saturation' }}>
                <div style={{ background: "rgba(0, 0, 0, 0.3)", height: "100%" }} className="text-center d-flex justify-content-center align-items-center text-white">
                    <div className="w-50 px-4 py-3 "><h2 className="title-style">Home | Products</h2></div>
                </div>
            </div>

        </div>
    );
};

export default Banner;