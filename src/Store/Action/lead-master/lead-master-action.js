export const SET_LEAD_DATA = 'SET_LEAD_DATA'
export const SET_LEAD_API_JSON = 'SET_LEAD_API_JSON'
export const SET_LEAD_SEARCH_JSON = 'SET_LEAD_SEARCH_JSON'

export const setLeadMasterData = (data) => ({ type: SET_LEAD_DATA, value: data });
export const setLeadMasterApiJson = (data) => ({ type: SET_LEAD_API_JSON, value: data });