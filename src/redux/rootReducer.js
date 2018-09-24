import initialState from './initialState';

function setStateReducer(state = initialState, action) {
  if (action.setState) {
    return action.setState;
  } else {
    return state;
    // return combinedReducers(state, action); //
  }
}

export default setStateReducer;
