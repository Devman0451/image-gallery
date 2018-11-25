import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import styles from './AddComment.module.css';

class AddComment extends Component {
    state = {
        comment: '',
        postSuccess: false
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const newComment = {
            comment: this.state.comment,
            id: Math.random()
        }

        axios.get(`https://image-gallery-adf56.firebaseio.com/Images/${this.props.fileName.split('.')[0]}/comments.json`)
            .then(res => {
                axios.post(`https://image-gallery-adf56.firebaseio.com/Images/${this.props.fileName.split('.')[0]}/comments.json`, newComment)
                    .then(res => {
                        this.setState({ postSuccess: true });
                    })
            })

    }

    handleInput = (e) => {
        this.setState({
            comment: e.target.value
        });
    }

    render() {
        const msg = this.state.postSuccess ? <p>Post Submitted!</p> : null;

        return (
            <>
            {msg}
            <div className={styles["comment"]}>
                <form onSubmit={this.handleSubmit} className={styles["form-add-comment"]}>
                    <textarea onKeyUp={this.handleInput}></textarea>
                    <button type="submit">Add Comment</button>
                </form>
            </div>
            </>
        );
    };
};

const mapStateToProps = state => {
    return {
        userID: state.userID
    }
}

export default connect(mapStateToProps)(AddComment);