const initialState = {
    showcaseProfile: null,
    loading: false,
    error: false
};

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_SHOWCASE_PROILE_SUCCESS':
            return {
                ...state,
                showcaseProfile: action.profile
            }
        case 'FETCH_PROFILE_FAILED':
            return {
                ...state,
                error: true
            }
        default:
            return state
    }
}

export default profileReducer;