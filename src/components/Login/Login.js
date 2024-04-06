import React from 'react';
import { useHistory } from "react-router-dom";
import './Login.scss';

const Login = (props) => {
    let history = useHistory()

    const handleRegisterPage = () => {
        history.push('/register')
    }

    return (
        <div className='login-background'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'></div>
                    <div className='login-container col-3'>
                        <div className='login-content row'>
                            <div className='col-12 login-title'>LOGIN YOUR ACCOUNT</div>
                            <div className='col-12 mt-3'>
                                <label for="email">Email</label>
                                <input
                                    id='email'
                                    type='text'
                                    className='form-control'
                                    placeholder='Enter your email'
                                />
                            </div>
                            <div className='col-12 mt-3'>
                                <label for="password">Password</label>
                                <input
                                    id='password'
                                    type='password'
                                    className='form-control'
                                    placeholder='Enter your password'
                                />
                            </div>
                            <div className='col-12 mt-3'>
                                <button className='customized-btn' type='button' >Login</button>
                            </div>
                            <div className='col-12 mt-3'>
                                <span className='forgot-password'>Forgot your password?</span>
                            </div>

                            <hr className='mt-3' />

                            <div className='col-12'>
                                <button
                                    onClick={() => handleRegisterPage()}
                                    className='customized-btn'
                                    type='button'
                                >
                                    Create a new account
                                </button>
                            </div>

                            <hr className='mt-3' />

                            <div className='col-12 text-center mt-3'>
                                <span>Or Login with:</span>
                            </div>
                            <div className='col-12 login-social'>
                                <i className="fab fa-google google"></i>
                                <i className='fab fa-facebook-f facebook'></i>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'></div>
                </div>
            </div>
        </div>
    )
}

export default Login;