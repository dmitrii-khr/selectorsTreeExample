import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import DevTools from './devTools';
// import createLogger from 'redux-logger';
import rootReducer from './rootReducer';


export default function (initialState = {}) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk),
    DevTools.instrument()
  )
  );

  return store;
}
