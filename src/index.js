import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from './ThemeProvider';
import App from './App';
import './index.css';
import TweekContextSelector from './dev/TweekContextSelector';

ReactDOM.render(
  <ThemeProvider>
    <TweekContextSelector />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
