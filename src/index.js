import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './modules/app/components/app';
import ScoringPage from './modules/poemScoring/components/scoringPage'; // В приложении, оно вставляется через рутер
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import DevTools from './redux/devTools';
import initialState from './redux/initialState';
import configureStore from './redux/configureStore';


const store = configureStore(initialState);

const component =
(<Provider store={store}>
  <App >
    <ScoringPage/>
  </App>
</Provider>);

ReactDOM.render(component, document.getElementById('root'));
if (process.env.NODE_ENV !== 'production') {
  ReactDOM.render(<DevTools store={store}/>, document.getElementById('dev-tools'));
}
registerServiceWorker();
