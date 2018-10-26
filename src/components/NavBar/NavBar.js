import React from 'react';
import { NavLink } from 'react-router-dom';

const navBar = () => (
    <nav className="TODO">
        <ul>
            <li><NavLink to="/">Posts</NavLink></li>
            <li><NavLink to="/signin">Sign In</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
        </ul>
    </nav>
);

export default navBar;