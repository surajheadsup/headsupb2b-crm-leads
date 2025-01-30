import { SET_LOADING } from "../../Action/loading/loading-action";

const initialState = {
    doc: {},
    timestamp: Date.now()
}

const LoadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return ({ ...state, doc: action.value, timestamp: Date.now() })
        default:
            return state;
    }
}

export default LoadingReducer;
