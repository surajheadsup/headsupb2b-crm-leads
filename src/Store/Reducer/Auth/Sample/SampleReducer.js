import { SET_AUTH, SET_AUTH_ERROR } from "../../../Action/Auth/Sample/AuthAction";

const initialState = {
    doc: {},
    error: {},
    timestamp: Date.now()
}

const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_AUTH:
            return ({ ...state, doc: action.value, timestamp: Date.now() })
        case SET_AUTH_ERROR:
            return ({ ...state, error: action.value, timestamp: Date.now() })
        default:
            return state;
    }
}

export default AuthReducer;