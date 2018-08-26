import at from '../constants/actionTypes';
import logic from '../logic/poem';
import appAt from '../../app/constants/actionTypes';

export function poemTextChange(text) {
  return function (dispatch, getState) {
    const analyseResult = logic.analysePoem(text);

    const gState = getState();
    const scoringStateOld =  gState.get('poemScoring');
    const scoringStateNew = logic.onType(scoringStateOld, analyseResult);
    dispatch({
      type: at.POEM_TYPE,
      payload: scoringStateNew
    });

    if (analyseResult.censoredWords) {
      const userName = gState.getIn(['app', 'account', 'name']);
      const message = `${userName}, avoid of using word ${analyseResult.censoredWords}, please!`;
      dispatch({
        type: appAt.SHOW_MESSAGE,
        payload: message
      });
    }
  };
}

export function newPoem() {
  return function (dispatch, getState) {
    dispatch(poemTextChange('')); // clean poemText and score

    dispatch({
      type: appAt.SHOW_MESSAGE,
      payload: 'You can begin a new poem now!'
    }); // show message
  };
}
