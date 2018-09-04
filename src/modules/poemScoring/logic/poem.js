import obscenseWords from '../constants/obsceneWords';

export default {
  onType(state, text) {
    const { reductedText, censoredWords } = this.redactText(text);

    const newState = state
      .set('poemText', reductedText)
      .set('score', this.calcScore(reductedText));

    return {
      newState,
      censoredWords
    };
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
