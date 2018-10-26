import React from 'react';

const imageThumb = (props) => {
    const imgStyle = {
        background: `url(${props.imagePath})`
    };

    return (
        <div style={imgStyle}>
            <h3>Title</h3>
            <h5>Author</h5>
        </div>
    );
};

export default imageThumb;