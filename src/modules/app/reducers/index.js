import {  combineReducers } from 'redux-immutable';
import message from './message';
import account from './account';

export default combineReducers({ account, message });
