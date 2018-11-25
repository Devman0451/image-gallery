import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import styles from '../SignIn/SignIn.module.css';

class SignUp extends Component {

    //All state.inputs objects must have true validated property for the submit button to become active.
    state = {
        inputs: {
            name: {
                value: '',
                validations: {
                    minLength: 5,
                    maxLegnth: 20,
                },
                validated: false
            },
            email: {
                value: '',
                validations: {
                    isEmail: true
                },
                validated: false
            },
            password: {
                value: '',
                validations: {
                    isPwd: true
                },
                validated: false
            }
        },
        formValid: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const authData = {
            name: this.state.inputs.name.value,
            email: this.state.inputs.email.value,
            password: this.state.inputs.password.value,
            returnSecureToken: true
        }

        axios.get('https://image-gallery-adf56.firebaseio.com/API.json')
            .then(res => {
                const endPoint = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${res.data.apiKey}`;
                return axios.post(endPoint, authData);
            }).then(res => {
                this.props.signInUser(res.data);
                this.props.history.push("/");
            })
    }

    handleInput = (e) => {
        const updatedInputs = {
            ...this.state.inputs,
        };

        const UpdatedInputData = {
            ...updatedInputs[e.target.name]
        }

        UpdatedInputData.value = e.target.value;
        UpdatedInputData.validated = this.checkInputValidation(UpdatedInputData);
        updatedInputs[e.target.name] = UpdatedInputData;

        const isValid = Object.keys(updatedInputs).every(input => updatedInputs[input].validated === true);

        this.setState({
            inputs: updatedInputs,
            formValid: isValid
        });
    }

    checkInputValidation = (data) => {
        let isValid = true;

        const value = data.value;
        const validations = data.validations;

        if (validations.minLength) {
            isValid = value.length >= validations.minLength && isValid;
        }

        if (validations.maxLength) {
            isValid = value.length <= validations.maxLength && isValid;
        }

        if (validations.isPwd) {
            const expression = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            isValid = expression.test(value) && isValid;
        }

        if (validations.isEmail) {
            const expression = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = expression.test(value) && isValid;
        }

        return isValid;
    }

    render() {
        return (
            <div className={styles['form-container']}>
                <h1>Sign Up</h1>
                <p>Password must contain one capital letter, one special character, a number, and be 8 characters or more</p>
                <form onSubmit={this.handleSubmit} className={styles['form']}>
                    <input type="text" name="name" placeholder="Username" onKeyUp={this.handleInput} onBlur={this.handleInput} />
                    <input type="email" name="email" placeholder="Email" onKeyUp={this.handleInput} onBlur={this.handleInput} />
                    <input type="password" name="password" placeholder="Password" onKeyUp={this.handleInput} onBlur={this.handleInput} />
                    <button disabled={!this.state.formValid}>Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signInUser: (authData) => {dispatch({type: "SIGN_IN_USER", authData })},
        signInFail: () => {dispatch({type: "SIGN_IN_FAIL"})}
    };
};

export default connect(null, mapDispatchToProps)(SignUp);

// axios.get('https://image-gallery-adf56.firebaseio.com/API.json')
//                     .then(res => {
//                         const endPoint = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/setAccountInfo?key=${res.data.apiKey}`;
//                         const userName = { displayName: authData.name };
//                         axios.post(endPoint, userName).catch(err => console.log(err));
//                         this.props.history.push("/");
//                     });