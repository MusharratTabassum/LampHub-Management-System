import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import img from '../loginImg1.png'
import './Login.css'


const Login = () => {
    const { handleGoogleSignIn, handleEmailChange, handlePasswordChange,
        error, handleUserLogin, handleResetPassword, loginProcess, email, password } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/";


    const handleGoogleLoginProcess = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_url);
            })
    }
    const handleLoginSubmit = e => {
        loginProcess(email, password, location, history);
        e.preventDefault();
    }


    return (
        <div>
            <Navigation></Navigation>
            <div className='container'>
                <div className='row mt-5 loginArea'>
                    <div className='col-lg-5'>
                        <img style={{ height: '600px', width: "100%", margin: 0 }} src={img} alt="" />
                    </div>
                    <div className='col-lg-7 text-start loginInfo'>
                        <h1 className='mb-4'>Lampshub</h1>
                        <h4 className='mb-4'>Sign into your account</h4>
                        <form onSubmit={handleLoginSubmit} >
                            <input onBlur={handleEmailChange} className='input-box' type="email" placeholder="write your email" required />
                            <input onBlur={handlePasswordChange} className='input-box' placeholder="write your password" type="password" required />
                            <br />
                            <span className="text-red ms-1"><small>{error}</small></span>
                            {/* <input type="submit" />*/}
                            <br />
                            <button type="submit" className="authenticate-btn">
                                Login
                            </button>
                            <br />
                            <button className='reset mt-5' onClick={handleResetPassword}>Forget your password?</button>

                            <h6 className='color mt-2'>Don't have an account?<Link className='reset' to="/registration">Register here</Link></h6>

                        </form>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>

    );
};

export default Login;