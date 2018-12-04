import axios from 'axios';

// Used to logout user automatically after auth expires
export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const setUsername = (idToken, name) => {
    return dispatch => {
        axios.get('https://image-gallery-adf56.firebaseio.com/API.json')
            .then(res => {
                const endPoint = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/setAccountInfo?key=${res.data.apiKey}`;
                const userName = { idToken: idToken, displayName: name };
                axios.post(endPoint, userName).then(res => console.log(res.data)).catch(err => console.log(err));
            });
    };
};

const logout = () => {
    return {
        type: "SIGN_OUT_USER"
    };
};