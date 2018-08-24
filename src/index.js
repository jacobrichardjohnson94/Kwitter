import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from './store.js';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
