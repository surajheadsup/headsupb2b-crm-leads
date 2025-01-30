import { SET_CHART_DATA, SET_CHART_DATE, SET_CHART_TYPE, SET_CHART_API_JSON } from "../../../Action/common/chart/chart-action"

const initialState = {
    doc: null,
    apiJson:{ type : 'daily', date:Date.now()},
    selectedDate: Date.now(),
    selectedType: 'hourly',
    timestamp: Date.now()
}

const ChartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHART_DATA:
            return ({ ...state, doc: action.value, timestamp: Date.now() })
        case SET_CHART_API_JSON:
            return ({ ...state, apiJson: action.value, timestamp: Date.now() })
        case SET_CHART_DATE:
            return ({ ...state, selectedDate: action.value, timestamp: Date.now() })
        case SET_CHART_TYPE:
            return ({ ...state, selectedType: action.value, timestamp: Date.now() })
        default:
            return state;
    }
}

export default ChartReducer;