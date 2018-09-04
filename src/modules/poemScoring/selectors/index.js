import extendSelectors from '../../app/extendSelectors';

const selectors = {
  poemText:{},
  score:{}
};

extendSelectors(selectors, [ 'poemScoring' ]);

export default selectors;
