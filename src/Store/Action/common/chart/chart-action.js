
export const SET_CHART_DATA = 'SET_CHART_DATA'
export const SET_CHART_DATE = 'SET_CHART_DATE'
export const SET_CHART_TYPE = 'SET_CHART_TYPE'
export const SET_CHART_API_JSON = 'SET_CHART_API_JSON'

export const setChartApi = (data) => ({ type: SET_CHART_API_JSON, value: data });
export const setChartData = (data) => ({ type: SET_CHART_DATA, value: data });
export const setChartDate = (data) => ({ type: SET_CHART_DATE, value: data });
export const setChartType = (data) => ({ type: SET_CHART_TYPE, value: data });