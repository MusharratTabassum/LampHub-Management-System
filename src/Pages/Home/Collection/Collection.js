import React from 'react';
import img from './images/Banner-Lighting-Collections.jpg'

import './Collection.css'
import { Link } from 'react-router-dom';

const Collection = () => {
    return (
        <div className='container collection'>
            <div className='row '>
                <div className='col-lg-6'>
                    <img style={{ width: '100%', margin: 0 }} src={img} alt="" />
                </div>
                <div className='col-lg-6 pt-5 text-start'>
                    <div className='collection-title ms-4'>
                        <h1>Lighting
                            <br /> Collections</h1>
                        <p>Matching looks in ceiling lights
                            <br /> sconces, chandeliers, and more.</p>
                        <h2 className='mt-5'> <Link to='/explore'>SHOP LAMP COLLECTION</Link></h2>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Collection;