import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.css';

const navBar = () => (
    <nav className={styles['navigation']}>
        <ul className={styles['navigation-list']}>
            <li><NavLink exact to="/">Posts</NavLink></li>
            <li><NavLink to="/signin">Sign In</NavLink></li>
            <li><NavLink to="/signup">Sign Up</NavLink></li>
        </ul>
    </nav>
);

export default navBar;