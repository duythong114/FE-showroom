import React, { useEffect } from 'react';
import './Nav.scss';
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

const Nav = (props) => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    let location = useLocation()

    useEffect(() => {
        console.log("check location:", location)
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {!(location.pathname === "/login" || location.pathname === "/register") &&
                <div className="topnav">
                    <NavLink to="/" exact>Home</NavLink>

                    {isLoggedIn === true
                        ?
                        <>
                            <NavLink to="/user">User</NavLink>
                            <NavLink to="/car">Car</NavLink>
                            <NavLink to="/payment">Payment</NavLink>
                        </>
                        :
                        <>
                            <NavLink to="/login">Login</NavLink>
                        </>
                    }
                </div>
            }
        </>
    );
}

export default Nav;