import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
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
                validations: {},
                validated: false
            },
            password: {
                value: '',
                validations: {
                    minLength: 6
                },
                validated: false
            },
            password2: {
                value: '',
                validations: {
                    minLength: 6,
                    matchesPwd: true
                },
                validated: false
            }
        },
        formValid: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const authData = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true
        }

        axios.get('https://image-gallery-adf56.firebaseio.com/API.json')
            .then(res => {
                const endPoint = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${res.data.apiKey}`;
                return axios.post(endPoint, authData);
            }).then(res => {
                console.log(res);
            })
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" placeholder="Username"  onKeyDown={this.handleInput} onBlur={this.handleInput}/>
                    <input type="email" name="email" placeholder="Email"  onKeyDown={this.handleInput} onBlur={this.handleInput}/>
                    <input type="password" name="password" placeholder="Password"  onKeyDown={this.handleInput} onBlur={this.handleInput}/>
                    <input type="password" name="password2" placeholder="Re-type password"  onKeyDown={this.handleInput} onBlur={this.handleInput}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default SignUp;