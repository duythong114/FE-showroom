import React, { useEffect } from 'react';
import './User.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../../slices/userSlice';

const User = (props) => {
    const dispatch = useDispatch()
    const listUsers = useSelector(state => state.user.listUsers)
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)

    useEffect(() => {
        if (isLoggedIn === true) {
            dispatch(fetchAllUsers())
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className='users-container' >
            <div className="container">
                <table className="table table-hover customers mt-3">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Email</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Address</th>
                            <th scope="col">PhoneNumber</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers && listUsers.length > 0 &&
                            listUsers.map((item, index) => (
                                <tr key={`user-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>{item.phoneNumber}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default User;