// Used to logout user automatically after auth expires
export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

const logout = () => {
    return {
        type: "SIGN_OUT_USER"
    };
};