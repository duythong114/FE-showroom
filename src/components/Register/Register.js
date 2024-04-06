import React, { useState } from 'react';
import './Register.scss';

const Register = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [gender, setGender] = useState("")

    const handleRegisterBtn = () => {
        alert("me")
        let userData = { email, password, confirmPassword, firstName, lastName, address, phone, gender }
        console.log("check user data:", userData)
    }

    return (
        <div className='register-background'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='register-container col-4'>
                        <div className="register-content row">
                            <form className="row g-3">
                                <div className='col-12 register-title'>REGISTER A NEW ACCOUNT</div>
                                <div className="col-12">
                                    <label htmlFor="inputEmail">Email</label>
                                    <input
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        id='inputEmail' type="email" className="form-control" placeholder="example@gmail.com" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputPassword">Password</label>
                                    <input
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        id='inputPassword' type="password" className="form-control" placeholder="Password" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputConfirmPassword">Confirm Password</label>
                                    <input
                                        value={confirmPassword}
                                        onChange={(event) => setConfirmPassword(event.target.value)}
                                        id='inputConfirmPassword' type="password" className="form-control" placeholder="Confirm Password" />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="inputFirstName">First name</label>
                                    <input
                                        value={firstName}
                                        onChange={(event) => setFirstName(event.target.value)}
                                        id='inputFirstName' type="text" className="form-control" placeholder="First name" />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="inputLastName">Last name</label>
                                    <input
                                        value={lastName}
                                        onChange={(event) => setLastName(event.target.value)}
                                        id='inputLastName' type="text" className="form-control" placeholder="Last name" />
                                </div>

                                <div className="col-12">
                                    <label htmlFor="inputAddress">Address</label>
                                    <input
                                        value={address}
                                        onChange={(event) => setAddress(event.target.value)}
                                        id='inputAddress' type="text" className="form-control" placeholder="1234 Main St" />
                                </div>

                                <div className="col-6">
                                    <label htmlFor="inputPhoneNumber">Phone number</label>
                                    <input
                                        value={phone}
                                        onChange={(event) => setPhone(event.target.value)}
                                        id='inputPhoneNumber' type="text" className="form-control" />
                                </div>
                                <div className="col-6">
                                    <label htmlFor="inputGender">Gender</label>
                                    <select
                                        value={gender}
                                        onChange={(event) => setGender(event.target.value)}
                                        id='inputGender' className="form-select">
                                        <option hidden></option>
                                        <option value="1">Male</option>
                                        <option value="0">Female</option>
                                    </select>
                                </div>
                                <div className='col-12 mt-3'>
                                    <button
                                        onClick={() => handleRegisterBtn()}
                                        className='customized-btn' type='button'
                                    >
                                        Register
                                    </button>
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

export default Register;