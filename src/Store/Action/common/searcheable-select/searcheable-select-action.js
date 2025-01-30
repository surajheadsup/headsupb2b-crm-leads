
export const SET_SEARCHABLE_SELECT_DATA = 'SET_SEARCHABLE_SELECT_DATA'
export const SET_SEARCHABLE_SELECT_SELECTED_DATA = 'SET_SEARCHABLE_SELECT_SELECTED_DATA'
export const SET_SEARCHABLE_SELECT_MULTISELECTED_DATA = 'SET_SEARCHABLE_SELECT_MULTISELECTED_DATA'

export const setSearchableSelectData = (data) => ({ type: SET_SEARCHABLE_SELECT_DATA, value: data });
export const setSearchableSelectSelectedData = (data) => ({ type: SET_SEARCHABLE_SELECT_SELECTED_DATA, value: data });
export const setSearchableSelectMultiSelectedData = (data) => ({ type: SET_SEARCHABLE_SELECT_MULTISELECTED_DATA, value: data });