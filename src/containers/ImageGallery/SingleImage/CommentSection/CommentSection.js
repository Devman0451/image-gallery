import React from 'react';

import styles from './CommentSection.module.css';

const commentSection = (props) => {
    const comments = props.comments.map(comment => {
        return (
            <div className={styles["comment"]} key={comment.id}>
                <p><span>{comment.author}</span></p>
                <p>{comment.body}</p>
            </div>
        );
    })
    return (
        <div className={styles['comment-section']}>
            <h1>Comments</h1>
            {comments}
        </div>
    );
}

export default commentSection;