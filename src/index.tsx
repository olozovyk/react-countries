import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { light, vars } from 'theme';

import App from 'App';

import '../node_modules/modern-normalize/modern-normalize.css';
import 'index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

// Here will be changed theme:
const theme = light;

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ThemeProvider theme={vars}>
          <App />
        </ThemeProvider>
      </ThemeProvider>
    </Provider>
  </BrowserRouter>,
);
