import {  combineReducers } from 'redux-immutable';
import app from '../modules/app/reducers';
import poemScoring from '../modules/poemScoring/reducers';

export default combineReducers({ app, poemScoring });
