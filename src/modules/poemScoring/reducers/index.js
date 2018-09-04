import at from '../constants/actionTypes';
import Immutable from 'immutable';

export default function poemScoringReducer(state = Immutable.Map(), action) {
  switch (action.type) {
    case at.POEM_TYPE:
      return action.payload;
    default:
      return state;
  }
}
