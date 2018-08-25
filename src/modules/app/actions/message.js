import at from '../constants/actionTypes';
export function hideMessage() {
  return function (dispatch, getstate) {
    dispatch({
      type: at.HIDE_MESSAGE

    });
  };
}
