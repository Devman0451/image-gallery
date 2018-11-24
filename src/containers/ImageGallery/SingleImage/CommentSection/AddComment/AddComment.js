import React, { Component } from 'react';
import axios from 'axios';

import styles from './AddComment.module.css';

class AddComment extends Component {
    state = {
        comment: ''
    };

    handleSubmit = (e) => {
        e.preventDefault();

        axios.get('https://image-gallery-adf56.firebaseio.com/Images.json')
        .then(res => {
            const comments = res.data[this.props.fileName.split('.')[0]];
            console.log(comments);
        })

    }

    handleInput = (e) => {
        this.setState({
            comment: e.target.value
        });
    }

    render() {
        return (
            <div className={styles["comment"]}>
            <form onSubmit={this.handleSubmit} className={styles["form-add-comment"]}>
                <textarea onKeyUp={this.handleInput}></textarea>
                <button type="submit">Add Comment</button>
            </form>
            </div>
        );
    };
};

export default AddComment;