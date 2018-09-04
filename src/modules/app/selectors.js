import extendSelectors from './extendSelectors';

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
