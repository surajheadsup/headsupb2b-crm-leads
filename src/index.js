import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import PaginationReducer from './Store/Reducer/Pagination/PaginationReducer';
import ApiReducer from './Store/Reducer/Api/ApiReducer';
import LeadMasterReducer from './Store/Reducer/lead-master/lead-master-reducer';

const appReducer = combineReducers({
  ApiReducer,
  PaginationReducer,
  LeadMasterReducer
});

const rootReducer = (state, action) => {

  if (action.type === 'RESET_ALL_STATE') {
    state = undefined;  // Reset all state to undefined
  }
  return appReducer(state, action);
};

const store = createStore(rootReducer, applyMiddleware(thunk))

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
