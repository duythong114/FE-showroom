import React from 'react';
import './Nav.scss';
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../slices/userSlice'
import { toast } from 'react-toastify';
import { useHistory } from "react-router-dom";

const Nav = (props) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const user = useSelector(state => state.user.user)
    const location = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()

    const handleLogOutBtn = async () => {
        let response = await dispatch(logoutUser())
        if (response?.payload?.errorCode === 0) {
            toast.success(response.payload.errorMessage)
            history.push('/')
        }
    }

    return (
        <div>
            {!(location.pathname === "/login" || location.pathname === "/register") &&
                <div className="topnav fixed-top">
                    <NavLink to="/" exact>Home</NavLink>

                    {(isAuthenticated && user)
                        ?
                        <>
                            <NavLink to="/personal">Personal</NavLink>
                            <NavLink to="/car" exact>Car</NavLink>
                            <NavLink to="/payment">Payment</NavLink>
                            <NavLink to="/user" exact>User</NavLink>

                            <div className='user-info'>
                                <h3 className='welcome-text'>welcome&nbsp;</h3>
                                <h3 className='user-role'>{user && user.Group && user.Group.name}:</h3>
                                <h3 className='user-name'>{user && user.firstName}</h3>
                            </div>

                            <button
                                onClick={() => handleLogOutBtn()}
                                className='btn btn-primary btn-customized'
                            >
                                <i className="fa-solid fa-right-from-bracket"></i>
                            </button>
                        </>
                        :
                        <>
                            <NavLink to="/login">Login</NavLink>
                        </>
                    }
                </div>
            }
        </div>
    );
}

export default Nav;