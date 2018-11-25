const initialState = {
    comments: [],
    loading: false,
    error: false
};

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COMMENTS':
            return {
                ...state,
                comments: action.comments
            }
        case 'FETCH_COMMENTS_FAILED':
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
};

export default commentsReducer;