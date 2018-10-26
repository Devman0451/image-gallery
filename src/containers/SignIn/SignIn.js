import React, { Component } from 'react';
import axios from 'axios';

class SignIn extends Component {
    state = {
        email: "",
        password: ""
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
                const endPoint = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${res.data.apiKey}`;
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
                <h1>Sign In</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" name="email" placeholder="Email" onKeyDown={this.handleInput} onBlur={this.handleInput}/>
                    <input type="password" name="password" placeholder="Password" onKeyDown={this.handleInput} onBlur={this.handleInput}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default SignIn;