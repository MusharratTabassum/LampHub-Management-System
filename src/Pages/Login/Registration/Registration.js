import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import img from '../../Login/loginImg1.png'

const Registration = () => {
    const { name, handleNameChange, handleEmailChange, handlePasswordChange, error, handleUserRegistration, handleResetPassword } = useAuth();



    return (
        <div>
            <div className='container'>
                <div className='row mt-5 loginArea'>
                    <div className='col-lg-5'>
                        <img style={{ height: '600px', width: "100%", margin: 0 }} src={img} alt="" />
                    </div>
                    <div className='col-lg-7 text-start loginInfo'>
                        <h1 className='mb-4'>Lampshub</h1>
                        <h4 className='mb-4'>Sign into your account</h4>
                        <form onSubmit={handleUserRegistration} >
                            <input onBlur={handleNameChange} className='input-box' type="text" placeholder="write your name" required />
                            <input onBlur={handleEmailChange} className='input-box' type="email" placeholder="write your email" required />
                            <input onBlur={handlePasswordChange} className='input-box' placeholder="write your password" type="password" required />
                            <span className="text-red"><small>{error}</small></span>
                            {/* <input type="submit" />*/}
                            <button type="submit" className="authenticate-btn">
                                Register
                            </button>
                            <br />
                            <button className='reset mt-5' onClick={handleResetPassword}>Forget your password?</button>

                            <h6 className='color mt-2'>Already have an account?<Link className='reset' to="/login">Login here</Link></h6>

                        </form>




                    </div>
                </div>

            </div>

        </div>
    );
};

export default Registration;