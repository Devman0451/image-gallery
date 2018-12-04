import React from 'react';

import ImageGallery from '../../containers/ImageGallery/ImageGallery';
import News from '../News/News';
import Showcase from '../Showcase/Showcase';

const homepage = props => (
    <>
        <ImageGallery />
        <News />
        <Showcase />
    </>
);

export default homepage;