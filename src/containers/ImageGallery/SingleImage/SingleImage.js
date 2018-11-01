import React, { Component } from 'react';

import styles from './SingleImage.module.css';
import CommentSection from './CommentSection/CommentSection';

const imgPath = process.env.PUBLIC_URL + '/assets/images/';

class SingleImage extends Component {

    state = {
        fileName: null,
        comments: [
            {body: 'this is a test post for the react comment section', author: 'User2341', id: 1},
            {body: 'this is a test post for the react comment section', author: 'User2341', id: 2},
            {body: 'this is a test post for the react comment section', author: 'User2341', id: 3}
        ]
    }

    componentDidMount() {
        this.setState({fileName: this.props.match.params.image_id});
    }
    
    render() {
        return (
            <div className={styles['image-container']}>
                <h1>Image Title</h1>
                <img src={imgPath + this.state.fileName} alt="Gallery"/>
                <CommentSection comments={this.state.comments}/>
            </div>
        );
    };
}

export default SingleImage;