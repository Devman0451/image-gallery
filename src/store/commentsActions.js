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
        axios.get('https://image-gallery-adf56.firebaseio.com/Images.json')
            .then(res => {
                const imgName = path;
                if (typeof res.data[imgName] !== 'undefined') {
                    const commentsArr = [];
                    const newComments = res.data[imgName].comments;
                    for (let comment of Object.keys(newComments)) {
                        commentsArr.push(newComments[comment]);
                    }
                    dispatch(setComments(commentsArr));
                }
            })
            .catch(err => {
                dispatch(fetchCommentsFailed());
            });
    };
};