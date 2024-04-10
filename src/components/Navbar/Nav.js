import React from 'react';
import './Nav.scss';
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="topnav">
            <NavLink to="/" exact>Home</NavLink>
            <NavLink to="/user">User</NavLink>
            <NavLink to="/car">Car</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    );
}

export default Nav;