import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import img from '../loginImg1.png'
import './Login.css'

const Login = () => {


    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/";
    return (
        <div className='container'>
            <div className='row mt-5 loginArea'>
                <div className='col-lg-5'>
                    <img style={{ height: '600px', width: "100%", margin: 0 }} src={img} alt="" />
                </div>
                <div className='col-lg-7 text-start loginInfo'>
                    <h1 className='mb-4'>Lampshub</h1>
                    <h4 className='mb-4'>Sign into your account</h4>
                    <form >
                        <input className='input-box' type="email" placeholder="write your email" required />
                        <input className='input-box' placeholder="write your password" type="password" required />
                        <span className="error"><small></small></span>
                        {/* <input type="submit" />*/}
                        <button type="submit" className="authenticate-btn">
                            Login
                        </button>
                        <br />
                        <button className='reset mt-5' onClick={'handleResetPassword'}>Forget your password?</button>

                        <h6 className='color mt-2'>Don't have an account?<Link className='reset' to="/register">Register here</Link></h6>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default Login;