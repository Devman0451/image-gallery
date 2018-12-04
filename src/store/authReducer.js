
const initialState = {
    token: null,
    userID: null,
    uid: null,
    error: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SIGN_IN_USER":
            return {
                ...state,
                token: action.authData.idToken,
                userID: action.authData.localId,
                uid: action.authData.displayName,
                error: false
            };
        case "SIGN_IN_FAIL":
            return {
                ...state,
                error: true
            }
        case "SIGN_OUT_USER":
            return {
                ...state,
                token: null,
                userID: null,
                error: false
            }
        default:
            return state;
    }
}

export default authReducer;