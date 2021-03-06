import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import styles from './SignIn.module.css';

import { checkAuthTimeout } from '../../store/authActions';

class SignIn extends Component {

    //Internal state used for input value storage only, redux stores the response auth data
    state = {
        email: "",
        password: ""
    };

    //Submit state email and password to firebase.  Response data is dispatched to authReducer
    handleSubmit = (e) => {
        e.preventDefault();

        const authData = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true
        }

        axios.get('https://image-gallery-adf56.firebaseio.com/API.json')
            .then(res => {
                const endPoint = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${res.data.apiKey}`;
                return axios.post(endPoint, authData);
            }).then(res => {
                console.log(res.data);
                this.props.signInUser(res.data);
                this.props.authTimeout(res.data.expiresIn);
                this.props.history.push('/');
            }).catch(error => {
                this.props.signInFail();
            })
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const errors = this.props.error ? <p className={styles['error-message']}>Email/Password Invalid</p> : null;
        return (
            <div className={styles['form-container']}>
                <h1>Sign In</h1>
                {errors}
                <form onSubmit={this.handleSubmit} className={styles['form']}>
                    <input type="email" name="email" placeholder="Email" onKeyUp={this.handleInput} onBlur={this.handleInput}/>
                    <input type="password" name="password" placeholder="Password" autoComplete="on" onKeyUp={this.handleInput} onBlur={this.handleInput}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.auth.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signInUser: (authData) => {dispatch({type: "SIGN_IN_USER", authData })},
        signInFail: () => {dispatch({type: "SIGN_IN_FAIL"})},
        authTimeout: (expirationTime) => {dispatch(checkAuthTimeout(expirationTime))}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);