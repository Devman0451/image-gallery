import axios from 'axios';


export const setImages = (images) => {
    return {
        type: 'SET_IMAGES',
        images
    }
}

export const fetchImagesFailed = () => {
    return {
        type: 'FETCH_IMAGES_FAILED'
    };
};

// loads comments for each single image
export const initImages = () => {
    return dispatch => {
        axios.get('https://image-gallery-adf56.firebaseio.com/Images.json')
            .then(res => {
                const imageArr = [];
                const newImages = res.data;
                for (let image of Object.keys(newImages)) {
                    imageArr.push(newImages[image]);
                }
                dispatch(setImages(imageArr));
            })
            .catch(err => {
                dispatch(fetchImagesFailed());
            });
    };
};