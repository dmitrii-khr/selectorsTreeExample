import selectors from '../selectors';

export function hideMessage() {
  return function (dispatch, getState) {
    dispatch({
      type: 'Hide message',
      setState: selectors.message.replace(getState(), null)
    });
  };
}
