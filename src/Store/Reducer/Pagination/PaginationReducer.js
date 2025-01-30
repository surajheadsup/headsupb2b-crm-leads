import { SET_NESTED_PAGINATION, SET_PAGINATION } from "../../Action/Pagination/PaginationAction";

const initialState = {
    doc: { number: 1, total: 0, limit: 10 },
    nestedPagination: {},
    timestamp: Date.now()
}

const PaginationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PAGINATION:
            return ({ ...state, doc: action.value, timestamp: Date.now() })
        case SET_NESTED_PAGINATION:
            return ({ ...state, nestedPagination: action.value, timestamp: Date.now() })
        default:
            return state;
    }
}

export default PaginationReducer;