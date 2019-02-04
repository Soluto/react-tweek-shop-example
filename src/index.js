import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from './ThemeProvider';
import App from './App';
import './index.css';
import TweekContextSelector from './debug/TweekContextSelector';

ReactDOM.render(
  <>
    <TweekContextSelector />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root'),
);
