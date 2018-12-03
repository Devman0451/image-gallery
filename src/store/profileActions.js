import axios from 'axios';


export const setShowcaseProfile = (profile) => {
    return {
        type: 'SET_SHOWCASE_PROILE_SUCCESS',
        profile
    }
}

export const fetchProfileFailed = () => {
    return {
        type: 'FETCH_PROFILE_FAILED'
    };
};

// loads showcase profile
export const fetchShowcaseProfile = (profile) => {
    return dispatch => {
        axios.get(`https://image-gallery-adf56.firebaseio.com/Profiles/${profile}.json`)
            .then(res => {
                dispatch(setShowcaseProfile(res.data));
            })
            .catch(err => {
                dispatch(fetchProfileFailed());
            });
    };
};