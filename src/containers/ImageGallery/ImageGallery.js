import React, { Component } from 'react';

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
            <div>
                <h1>Image Gallery</h1>
                {imgs}
            </div>
        );
    };
};

export default ImageGallery;