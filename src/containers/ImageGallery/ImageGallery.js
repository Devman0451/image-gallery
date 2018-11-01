import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

    render() {
        const imgs = this.state.imgs.map(imageName => {
            return (
                <Link to={'/images/' + imageName} key={imageName}>
                    <ImageThumb
                        imagePath={`${imgPath + imageName}`} />
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

export default ImageGallery;