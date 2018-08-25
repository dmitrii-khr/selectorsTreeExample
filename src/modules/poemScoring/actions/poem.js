import at from '../constants/actionTypes';

import appAt from '../../app/constants/actionTypes';

export function poemTextChange(text) {
  return function (dispatch, getstate) {
    dispatch({
      type: at.POEM_TYPE,
      payload: text
    });
  };
}

export function newPoem() {
  return function (dispatch, getstate) {
    dispatch({
      type: at.POEM_TYPE,
      payload: ''
    }); // Стриаем значение

    dispatch({
      type: appAt.SHOW_MESSAGE,
      payload: 'You can begin a new poem now!'
    }); // Отображаем сообщение
  };
}
