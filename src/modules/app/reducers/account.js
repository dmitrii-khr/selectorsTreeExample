import Immutable from 'immutable';

const initial = Immutable.fromJS(
  {
    name:'William',
    from: 'England' }
);


export default function checkListReducer(state = initial, action) {
  return state;
}
