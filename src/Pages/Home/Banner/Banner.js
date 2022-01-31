import React from 'react';
import { Link } from 'react-router-dom';
import "./Banner.css"
import { Typewriter, useTypewriter, Cursor } from 'react-simple-typewriter'


const Banner = () => {


    return (
        <div>
            <div className='bannerBg text-white d-flex justify-content-end' style={{ height: "600px" }}>
                <div className='w-50 text-start banner-text'>
                    <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                        Decorative Lamps{' '} <br />
                        <span style={{ color: '#fff', fontWeight: 'bold' }}>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['Elegent lamps for elegent decore', 'light the way   to the home you love', 'Choose the best lamp']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={80}
                                deleteSpeed={60}
                                delaySpeed={1000}
                            />
                        </span>
                    </h1>
                    <h3></h3>
                    <h4></h4>
                    <Link to="/explore"><h2>Shop Now</h2></Link>
                </div>


            </div>
        </div>

    );
};

export default Banner;