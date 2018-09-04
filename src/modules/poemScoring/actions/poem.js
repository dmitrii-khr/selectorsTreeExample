import at from '../constants/actionTypes';
import logic from '../logic/poem';
import appAt from '../../app/constants/actionTypes';

export function poemTextChange(text) {
  return function (dispatch, getState) {
    const globalState = getState();
    const scoringStateOld =  globalState.get('poemScoring'); // Получаем из глобального стейта нужный нам участок
    const { newState, censoredWords }  = logic.onType(scoringStateOld, text);

    dispatch({  // отправляем в редьюсер на установку обновленного стейта
      type: at.POEM_TYPE,
      payload: newState
    });

    if (censoredWords) { // Если были цензурированы слова, то показываем сообщение
      const userName = globalState.getIn(['app', 'account', 'name']);
      const message = `${userName}, avoid of using word ${censoredWords}, please!`;
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
