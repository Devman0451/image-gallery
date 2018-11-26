import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { initImages } from '../../store/imageActions';

import styles from './ImageGallery.module.css';

import ImageThumb from '../../components/ImageThumb/ImageThumb';

const imgPath = process.env.PUBLIC_URL + '/assets/images/';

class ImageGallery extends Component {
    state = {
        imgs: [
            'img1.jpeg',
            'img2.jpeg',
            'img3.jpeg',
            'img4.jpeg',
            'img5.jpeg',
            'img6.jpeg',
            'img7.jpeg',
            'img8.jpeg',
            'img9.jpeg'
        ]
    };

    componentDidMount() {
        this.props.fetchImages();
    }

    render() {
        const imgs = this.props.imgs.map(image => {
            return (
                <Link to={'/images/' + image.fileName} key={image.fileName}>
                    <ImageThumb
                        author={image.author}
                        title={image.title}
                        imagePath={`${imgPath + image.fileName}`} />
                </Link>
            );
        })

        return (
            <div className={styles['image-gallery']}>
                {imgs}
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        imgs: state.image.images
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchImages: () => { dispatch(initImages()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageGallery);