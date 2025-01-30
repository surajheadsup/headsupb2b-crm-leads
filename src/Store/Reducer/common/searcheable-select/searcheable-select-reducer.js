import { SET_SEARCHABLE_SELECT_DATA, SET_SEARCHABLE_SELECT_MULTISELECTED_DATA, SET_SEARCHABLE_SELECT_SELECTED_DATA } from "../../../Action/common/searcheable-select/searcheable-select-action";

const initialState = {
    doc: null,
    selected: [],
    multiSelected: [],
    timestamp: Date.now()
}

const SearchableSelectReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCHABLE_SELECT_DATA:
            return ({ ...state, doc: action.value, timestamp: Date.now() })
        case SET_SEARCHABLE_SELECT_SELECTED_DATA:
            return ({ ...state, selected: action.value, timestamp: Date.now() })
        case SET_SEARCHABLE_SELECT_MULTISELECTED_DATA:
            return ({ ...state, multiSelected: action.value, timestamp: Date.now() })
        default:
            return state;
    }
}

export default SearchableSelectReducer;