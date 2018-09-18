import Immutable from 'immutable';

function setStateReducer(state, action) {
  if (action.type === '@@INIT') {
    return Immutable.Map();
  }
  if (action.setState) {
    return action.setState;
  } else {
    console.error('Action has not "setState" property');
  }
}


export default setStateReducer;
