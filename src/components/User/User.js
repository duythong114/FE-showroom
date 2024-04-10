import React, { useEffect } from 'react';
import './User.scss';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

const User = (props) => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const history = useHistory()

    useEffect(() => {
        if (isLoggedIn === false) {
            history.push("/login")
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className='users-container' >
            <h1>User Page ...</h1>
        </div>
    )
}

export default User;