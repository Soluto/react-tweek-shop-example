import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-tweek';
import { createTweekClient, watchVersion } from 'tweek-client';
import TweekLocalCache from 'tweek-local-cache';
import ThemeProvider from './ThemeProvider';
import App from './App';
import './index.css';
import config from './config.json';

const baseServiceUrl = config.TweekUrl;

function createTweekRepo(){
  const tweekClient = createTweekClient({ baseServiceUrl });
  const tweekRepo = new TweekLocalCache({ client: tweekClient });
  
  /*
  tweekRepo.context = {
    user: {
      id: "john"
    }
  };
  */

  // experimental - for hot reloading
  const tweekWatcher = watchVersion(baseServiceUrl);
  tweekWatcher.subscribe(() => tweekRepo.refresh());
  //

  return tweekRepo;
}

ReactDOM.render(
  <Provider repo={createTweekRepo()}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
