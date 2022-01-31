import React from 'react';
import img from './Page-Not-Found-Error-404.png'

const NotFound = () => {
    return (
        <div>
            <div className='p-5'>
                <img className='w-75' src={img} alt="" />
            </div>

        </div>
    );
};

export default NotFound;