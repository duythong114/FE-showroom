import React from 'react';
import './Personal.scss';
import { useSelector } from 'react-redux';

const Personal = (props) => {
    const user = useSelector(state => state.user.user)

    return (
        <div className='personal-background'>
            {user &&
                <div className='personal-container'>
                    <div className='user-title'>
                        <h1>Personal Information</h1>
                    </div>
                    <div className='user-info'>
                        <p>ID: {user.id}</p>
                        <p>Email: {user.email}</p>
                        <p>Fistname: {user.firstName}</p>
                        <p>Lastname: {user.lastName}</p>
                        <p>Address: {user.address}</p>
                        <p>Phonenumber: {user.phoneNumber}</p>
                        <p>Gender: {user.gender === 1 ? "Male" : "Female"}</p>
                        <p>Role: {user.Group.name}</p>
                        <p>Description: {user.Group.description}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Personal;