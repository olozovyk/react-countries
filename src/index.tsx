import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import App from './App';
import { light, vars } from './theme';
import { store } from './redux/store';
import '../node_modules/modern-normalize/modern-normalize.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

// Here will be changed theme:
const theme = light;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ThemeProvider theme={vars}>
          <App />
        </ThemeProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
