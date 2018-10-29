import React, { Component } from 'react';

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
            'img5.jpeg'
        ]
    };

    render() {
        const imgs = this.state.imgs.map(imageName => {
            return (
                <ImageThumb 
                    key={imageName}
                    imagePath={`${imgPath + imageName}`}/>
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