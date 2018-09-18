import extendSelectors from 'immutable-selectors';

const selectors = {
  poemText:{},
  score:{}
};

extendSelectors(selectors, [ 'poemScoring' ]);

export default selectors;
