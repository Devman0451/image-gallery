import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './SingleImage.module.css';

import CommentSection from './CommentSection/CommentSection';
import AddComment from './CommentSection/AddComment/AddComment';
import Loader from '../../../components/Loader/Loader';

import { initComments } from '../../../store/commentsActions';

const imgPath = process.env.PUBLIC_URL + '/assets/images/';

class SingleImage extends Component {

    state = {
        fileName: null
    }

    componentDidMount() {
        this.setState({ fileName: this.props.match.params.image_id });

        this.props.fetchComments(this.props.match.params.image_id.split('.')[0]);
    }

    render() {
        // Get comments from the image data as an array
        const commentsArr = [];
        if (this.props.imgData.hasOwnProperty('comments')) {
            const newComments = this.props.imgData.comments;
            for (let comment of Object.keys(newComments)) {
                commentsArr.push(newComments[comment]);
            }
        }

        //Newest comments first
        commentsArr.sort((a, b) => b.createdate - a.createdate);

        const message = commentsArr.length > 0 ? null : <p>Be the first to comment!</p>
        const button = this.props.isSignedIn ? <AddComment fileName={this.state.fileName} /> : null;
        const comments = commentsArr.length === 0 ? null : <CommentSection comments={commentsArr} />;
        return (
            <div className={styles['image-container']}>
                <h1>{this.props.imgData.title || 'Title'}</h1>
                <img src={imgPath + this.state.fileName} alt="Gallery" />
                {message}
                {comments}
                {button}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.token !== null,
        error: state.comment.error,
        imgData: state.comment.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchComments: (path) => { dispatch(initComments(path)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleImage);