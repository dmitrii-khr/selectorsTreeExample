import extendSelectors from 'immutable-selectors';

const selectors = {
  account:{
    userName:{}
  },
  message:{
    text:{}
  }
};

extendSelectors(selectors, [ 'app' ]);

export default selectors;
