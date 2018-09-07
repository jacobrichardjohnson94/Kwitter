import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/App';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'connected-react-router';

import { store, history } from './store.js';

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
