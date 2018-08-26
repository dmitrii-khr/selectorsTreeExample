import obscenseWords from '../constants/obsceneWords';

export default {
  onType(state, { text, score }) {
    return state
      .set('poemText', text)
      .set('score', score);
  },


  analysePoem(text) {
    const result = this.redactText(text);
    result.score = this.calcScore(result.text);
    return result;
  },

  calcScore(text) {
    const score = Math.floor(text.length / 10);
    return score > 5 ? 5 : score;
  },

  redactText(text) {
    const result = { text };
    const censoredWords  = [];
    obscenseWords.forEach((badWord) => {
      if (result.text.indexOf(badWord) >= 0) {
        result.text = result.text.replace(badWord, '*censored*');
        censoredWords.push(badWord);
      }
    });
    if (censoredWords.length > 0) {
      result.censoredWords = censoredWords.join(' ,');
    }
    return result;
  }

};
