
const initialState = {
    token: null,
    userID: null,
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SIGN_IN_USER":
            return {
                ...state,
                token: action.authData.idToken,
                userID: action.authData.localId
            };
        case "SIGN_OUT_USER":
            return {
                ...state,
                token: null,
                userID: null
            }
        default:
            return state;
    }
}

export default authReducer;