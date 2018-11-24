import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import styles from './SingleImage.module.css';
import CommentSection from './CommentSection/CommentSection';
import AddComment from './CommentSection/AddComment/AddComment';

const imgPath = process.env.PUBLIC_URL + '/assets/images/';

class SingleImage extends Component {

    state = {
        fileName: null,
        comments: []
    }

    componentDidMount() {
        this.setState({fileName: this.props.match.params.image_id});

        axios.get('https://image-gallery-adf56.firebaseio.com/Images.json')
        .then(res => {
            const imgName = this.props.match.params.image_id.split('.')[0];
            if(typeof res.data[imgName] !== 'undefined') {
                const oldComments = this.state.comments.slice(0);
                const newComments = res.data[imgName].comments;
                for (let comment of Object.keys(newComments)) {
                    oldComments.push(newComments[comment]);
                }
                this.setState({
                    comments: oldComments
                });
            }
        });
    }
    
    render() {
        const message = this.state.comments.length > 0 ? null : <p>Be the first to comment!</p>
        const button = this.props.isSignedIn ? <AddComment fileName={this.state.fileName}/> : null;
        return (
            <div className={styles['image-container']}>
                <h1>Image Title</h1>
                <img src={imgPath + this.state.fileName} alt="Gallery"/>
                {message}
                <CommentSection comments={this.state.comments}/>
                {button}
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.token !== null
    }
}

export default connect(mapStateToProps)(SingleImage);