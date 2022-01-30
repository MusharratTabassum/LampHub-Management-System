import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className='container-fluid ps-5 mt-5'>
                <div className='row  text-start'>
                    <div className="col-lg-3 col-md-6 ">
                        <ul><h4 style={{ fontWeight: '600' }}>ADDRESS</h4></ul>
                        <ul>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</ul>
                        <ul>0000 - 123 - 456789</ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <ul><h4 style={{ fontWeight: '600' }}>INFORMATION</h4></ul>
                        <ul>Help & Contact US</ul>
                        <ul>Return & Refunds</ul>
                        <ul>Online Store</ul>
                        <ul>Terms & Condition</ul>

                    </div>
                    <div className="col-lg-3 col-md-6">
                        <ul> <h4 style={{ fontWeight: '600' }}>ABOUT</h4></ul>
                        <ul><Link style={{ textDecoration: 'none', color: 'black' }} to="/">Travelicious</Link></ul>
                        <ul><Link style={{ textDecoration: 'none', color: 'black' }} to="/home">Tour prices</Link></ul>
                        <ul><Link style={{ textDecoration: 'none', color: 'black' }} >Testimonials</Link></ul>
                        <ul><Link style={{ textDecoration: 'none', color: 'black' }} to='/contact'>Contact us</Link></ul>

                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div>
                            <h4 style={{ fontWeight: '600' }}>STAY CONNECTED</h4>

                            <p className='mt-3'>Be the first who learns about our great promotions!</p>
                            <input className='p-2 mb-3' type="email" placeholder='Your Email Address' />
                        </div>
                        <button >Subscribe</button>
                        <div className='mt-3'>
                            <FontAwesomeIcon style={{ fontSize: '30px', margin: '5px' }} icon={faFacebookF} />
                            <FontAwesomeIcon style={{ fontSize: '30px', margin: '5px' }} icon={faInstagram} />
                            <FontAwesomeIcon style={{ fontSize: '30px', margin: '5px' }} icon={faTwitter} />
                            <FontAwesomeIcon style={{ fontSize: '30px', margin: '5px' }} icon={faYoutube} />

                        </div>
                    </div>
                </div>
                <small className='mt-5' >© 2022 Lamphub, Inc. All rights reserved</small>
            </footer>



        </div>
    );
};

export default Footer;