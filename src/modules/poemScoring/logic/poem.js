import obscenseWords from '../constants/obsceneWords';
import selectors from '../selectors';
import message from '../../app/logic/message';
import appSelectors from '../../app/selectors';
import Immutable from 'immutable';

export default {
  onType(gState, text) {
    const { reductedText, censoredWords } = this.redactText(text);

    const poemState  = selectors.root(gState) || Immutable.Map();

    const newPoemState = poemState   // module state mutating
      .set('poemText', reductedText)
      .set('score', this.calcScore(reductedText));

    let newGState =  selectors.root.replace(gState, newPoemState);

    if (censoredWords) {   // message
      const userName = appSelectors.flat.userName(gState);
      const messageText = `${userName}, avoid of using word ${censoredWords}, please!`;
      newGState = message.showMessage(newGState, messageText);
    }

    return newGState;
  },

  onNewPoem(gState) {
    const newState = selectors.root.replace(gState, null);
    return message.showMessage(newState, 'You can begin a new poem now!');
  },


  calcScore(text) {
    const score = Math.floor(text.length / 10);
    return score > 5 ? 5 : score;
  },

  redactText(text) {
    const result = { reductedText:text };
    const censoredWords  = [];
    obscenseWords.forEach((badWord) => {
      if (result.reductedText.indexOf(badWord) >= 0) {
        result.reductedText = result.reductedText.replace(badWord, '*censored*');
        censoredWords.push(badWord);
      }
    });
    if (censoredWords.length > 0) {
      result.censoredWords = censoredWords.join(' ,');
    }
    return result;
  }

};
