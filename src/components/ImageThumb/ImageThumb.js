import React from 'react';

import styles from './ImageThumb.module.css';

const imageThumb = (props) => {
    const imgStyle = {
        background: `url(${props.imagePath})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    };

    return (
        <div style={imgStyle} className={styles['image-thumb']}>
            <div className={styles['image-thumb-text']}>
                <h3>Title</h3>
                <h5>Author</h5>
            </div>
        </div>
    );
};

export default imageThumb;