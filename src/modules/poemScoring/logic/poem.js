export default {
  onType(state, text) {
    return state
      .set('poemText', text)
      .set('score', this.calcScore(text));
  },

  calcScore(text) {
    const score = Math.floor(text.length / 10);
    return score > 5 ? 5 : score;
  }

};
