import { SET_API_JSON } from "../../Action/Api/ApiAction"

const initialState = {
    doc: null,
    json:{},
    error: {},
    result : {},
    timestamp: Date.now()
}

const ApiReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_API_JSON:
            return ({ ...state, json: action.value, timestamp: Date.now() })
        default:
            return state;
    }
}

export default ApiReducer;