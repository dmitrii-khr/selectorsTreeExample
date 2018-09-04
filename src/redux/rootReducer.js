import {  combineReducers } from 'redux-immutable';
import app from '../modules/app/reducers';

const combinedReducers = combineReducers({ app });

function setStateReducer(state, action) {
  if (action.setState) {
    return action.setState;
  } else {
    return combinedReducers(state, action);
  }
}


export default setStateReducer;
