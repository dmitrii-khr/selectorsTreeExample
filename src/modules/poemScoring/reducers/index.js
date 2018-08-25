import at from '../constants/actionTypes';
import Immutable from 'immutable';
import logic from '../logic/poem';

export default function poemScoringReducer(state = Immutable.Map(), action) {
  switch (action.type) {
    case at.POEM_TYPE:
      return logic.onType(state,  action.payload);
    default:
      return state;
  }
}
