import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import App from './App';
import { light, vars } from './theme';
import '../node_modules/modern-normalize/modern-normalize.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

// Here will be changed theme:
const theme = light;

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={vars}>
        <App />
      </ThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
