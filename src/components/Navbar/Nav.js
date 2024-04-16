import React from 'react';
import './Nav.scss';
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

const Nav = (props) => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const user = useSelector(state => state.user.user)
    const location = useLocation()

    return (
        <div>
            {!(location.pathname === "/login" || location.pathname === "/register") &&
                <div className="topnav fixed-top">
                    <NavLink to="/" exact>Home</NavLink>

                    {isAuthenticated === true
                        ?
                        <>
                            <NavLink to="/personal">Personal</NavLink>
                            <NavLink to="/car">Car</NavLink>
                            <NavLink to="/payment">Payment</NavLink>
                            <NavLink to="/user" exact>User</NavLink>

                            <div className='user-info'>
                                <h3 className='welcome-text'>welcome&nbsp;</h3>
                                <h3 className='user-role'>{user && user.Group && user.Group.name}:</h3>
                                <h3 className='user-name'>{user && user.firstName}</h3>
                            </div>
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