import selectors from '../selectors';

export default{
  showMessage(gState, text) {
    return selectors.message.text.replace(gState, text);
  }
};
