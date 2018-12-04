import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import { initComments } from '../../../../../store/commentsActions';

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
            id: Math.random(),
            createdate: Date.now(),
            user: this.props.userName
        }

        axios.get(`https://image-gallery-adf56.firebaseio.com/Images/${this.props.fileName.split('.')[0]}/comments.json`)
            .then(res => {
                axios.post(`https://image-gallery-adf56.firebaseio.com/Images/${this.props.fileName.split('.')[0]}/comments.json`, newComment)
                    .then(res => {
                        this.props.fetchComments(this.props.fileName.split('.')[0]);
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
        userName: state.auth.uid
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchComments: (path) => { dispatch(initComments(path)) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);