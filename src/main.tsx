import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';

import { store } from './redux/store';
import App from './components/App/App';

import '../node_modules/modern-normalize/modern-normalize.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    {/*<BrowserRouter>*/}
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    {/*</BrowserRouter>*/}
  </React.StrictMode>,
);
