import logic from '../logic/poem';

export function poemTextChange(text) {
  return function (dispatch, getState) {
    dispatch({
      type: 'Poem typing',
      setState: logic.onType(getState(), text),
      payload: text
    });
  };
}

export function newPoem() {
  return function (dispatch, getState) {
    dispatch({
      type: 'New poem',
      setState: logic.onNewPoem(getState())
    });
  };
}
