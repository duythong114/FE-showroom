import React from 'react';
import './Register.scss';

const Register = (props) => {

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
                                    <label for="inputEmail">Email</label>
                                    <input id='inputEmail' type="email" className="form-control" placeholder="example@gmail.com" required />
                                </div>
                                <div className="col-12">
                                    <label for="inputPassword">Password</label>
                                    <input id='inputPassword' type="password" className="form-control" placeholder="Password" required />
                                </div>
                                <div className="col-12">
                                    <label for="inputConfirmPassword">Confirm Password</label>
                                    <input id='inputConfirmPassword' type="password" className="form-control" placeholder="Confirm Password" required />
                                </div>
                                <div className="col-6">
                                    <label for="inputFirstName">First name</label>
                                    <input id='inputFirstName' type="text" className="form-control" placeholder="First name" required />
                                </div>
                                <div className="col-6">
                                    <label for="inputLastName">Last name</label>
                                    <input id='inputLastName' type="text" className="form-control" placeholder="Last name" required />
                                </div>

                                <div className="col-12">
                                    <label for="inputAddress">Address</label>
                                    <input id='inputAddress' type="text" className="form-control" placeholder="1234 Main St" required />
                                </div>

                                <div className="col-6">
                                    <label for="inputPhoneNumber">Phone number</label>
                                    <input id='inputPhoneNumber' type="text" className="form-control" required />
                                </div>
                                <div className="col-6">
                                    <label for="inputGender">Gender</label>
                                    <select id='inputGender' className="form-select" required>
                                        <option hidden></option>
                                        <option value="1">Male</option>
                                        <option value="0">Female</option>
                                    </select>
                                </div>
                                <div className='col-12 mt-3'>
                                    <button className='customized-btn' type='submit' >Register</button>
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