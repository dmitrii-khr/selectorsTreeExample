import Immutable from 'immutable';
import at from '../constants/actionTypes';

export default function checkListReducer(state = Immutable.Map(), action) {
  switch (action.type) {
    case at.SHOW_MESSAGE:
      return Immutable.Map({ text:action.payload });
    case at.HIDE_MESSAGE:
      return Immutable.Map();
    default:
      return state;
  }
}
