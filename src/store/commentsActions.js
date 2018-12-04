import axios from 'axios';


export const setComments = (comments) => {
    return {
        type: 'SET_COMMENTS',
        comments
    }
}

export const fetchCommentsFailed = () => {
    return {
        type: 'FETCH_COMMENTS_FAILED'
    };
};


// loads comments for each single image
export const initComments = (path) => {
    return dispatch => {
        axios.get(`https://image-gallery-adf56.firebaseio.com/Images/${path}.json`)
            .then(res => {
                dispatch(setComments(res.data));
            })
            .catch(err => {
                dispatch(fetchCommentsFailed());
            });
    };
};