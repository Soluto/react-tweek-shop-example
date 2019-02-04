import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from './ThemeProvider';
import App from './App';
import './index.css';
import TweekContextSelector from './debug/TweekContextSelector';

ReactDOM.render(
  <React.Fragment>>
    <TweekContextSelector />
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById('root'),
);
