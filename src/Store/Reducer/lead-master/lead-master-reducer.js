import { SET_LEAD_API_JSON, SET_LEAD_DATA, SET_LEAD_SEARCH_JSON } from "../../Action/lead-master/lead-master-action"

const initialState = {
    doc: null,
    apiJson: {},
    searchJson: { page: 1, limit: 10, search: {} },
    timestamp: Date.now()
}

const LeadMasterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LEAD_DATA:
            return ({ ...state, doc: action.value, timestamp: Date.now() })
        case SET_LEAD_API_JSON:
            return ({ ...state, apiJson: action.value, timestamp: Date.now() })
        case SET_LEAD_SEARCH_JSON:
            return ({ ...state, searchJson: action.value, timestamp: Date.now() })
        default:
            return state;
    }
}

export default LeadMasterReducer;
