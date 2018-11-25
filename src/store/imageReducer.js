const initialState = {
    images: [],
    loading: false,
    error: false
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_IMAGES':
            return {
                ...state,
                images: action.images
            }
        case 'FETCH_IMAGES_FAILED':
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
};

export default commentsReducer;