import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import DevTools from './devTools';
// import createLogger from 'redux-logger';
import rootReducer from './rootReducer';
import Immutable from 'immutable';


export default function (initialState = Immutable.Map()) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk),
    DevTools.instrument()
  )
  );

  return store;
}
