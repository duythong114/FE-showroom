import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from "react-router-dom";
import './Login.scss';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../slices/userSlice';

const Login = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const toastId = useRef()
    const isLogging = useSelector(state => state.user.isLogging)
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const user = useSelector(state => state.user.user)

    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleRegisterPageBtn = () => {
        history.push('/register')
    }

    const checkValidEmail = () => {
        let regx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!regx.test(email)) {
            // toast.error("Your email address is not valid")

            return false
        }
        return true
    }

    const handleLoginBtn = async () => {
        if (!email) {
            toast.error("Please enter your email address")
            return false
        }

        let validEmail = checkValidEmail()
        if (!validEmail) {
            toast.error("Your email address is not valid")
            return false
        }

        if (!password) {
            toast.error("Please enter your password")
            return false
        }

        let userData = { email, password }
        let response = await dispatch(loginUser(userData))

        if (response
            && response.payload
            && response.payload.response
            && response.payload.response.data
            && response.payload.response.data.errorCode !== 0
        ) {
            // update toast
            toast.update(toastId.current,
                {
                    render: `${response.payload.response.data.errorMessage}`,
                    type: toast.TYPE.ERROR,
                    autoClose: 2000,
                })
        }

        if (response && response.payload && response.payload.errorCode === 0) {
            // update toast
            toast.update(toastId.current,
                {
                    render: `${response.payload.errorMessage}`,
                    type: toast.TYPE.SUCCESS,
                    autoClose: 2000,
                })
            setEmail("")
            setPassword("")
            history.push('/')
        }
    }

    const handlePressEnter = (event) => {
        if (event.key === 'Enter' && event.keyCode === 13) {
            handleLoginBtn()
        }
    }

    // initital toast 
    if (isLogging === true) {
        toastId.current = toast.warn("Data is loading...", { autoClose: false })
    }

    useEffect(() => {
        if (isAuthenticated && user) {
            history.push('/')
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className='login-background'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='login-container col-4'>
                        <div className='login-content row'>
                            <form className="row g-3">
                                <div className='col-12 login-title'>LOGIN YOUR ACCOUNT</div>
                                <div className='col-12 mt-3'>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        id='email'
                                        type='text'
                                        className='form-control'
                                        placeholder='Enter your email'
                                    />
                                </div>
                                <div className='col-12 mt-3'>
                                    <label htmlFor="password">Password</label>
                                    <div className='input-password'>
                                        <input
                                            onKeyDown={(event) => handlePressEnter(event)}
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                            id='password'
                                            type={showPassword ? 'text' : 'password'}
                                            className='form-control'
                                            placeholder='Enter your password'
                                        />
                                        <span
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            <i className={showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'}></i>
                                        </span>
                                    </div>
                                </div>
                                <div className='col-12 mt-3'>
                                    <button
                                        onClick={() => handleLoginBtn()}
                                        className='customized-btn'
                                        type='button' >
                                        Login
                                    </button>
                                </div>
                                <div className='col-12 mt-3'>
                                    <span className='forgot-password'>Forgot your password?</span>
                                </div>

                                <hr className='mt-3' />

                                <div className='col-12'>
                                    <button
                                        onClick={() => handleRegisterPageBtn()}
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
                            </form>
                        </div>
                    </div>
                    <div className='col-4'></div>
                </div>
            </div>
        </div>
    )
}

export default Login;