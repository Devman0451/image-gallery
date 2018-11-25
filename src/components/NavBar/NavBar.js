import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.css';

class NavBar extends Component {
    render() {
        const signInNav = this.props.isSignedIn ? (
            <ul className={styles['navigation-list']}>
                <li><NavLink exact to="/">Posts</NavLink></li>
                <li onClick={this.props.logoutUser}>Logout</li>
            </ul>
        ) : (
                <ul className={styles['navigation-list']}>
                    <li><NavLink exact to="/">Posts</NavLink></li>
                    <li><NavLink to="/signin">Sign In</NavLink></li>
                    <li><NavLink to="/signup">Sign Up</NavLink></li>
                </ul>
            );

        return (
            <nav className={styles['navigation']}>
                {signInNav}
            </nav>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.token !== null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => { dispatch({ type: "SIGN_OUT_USER" }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);