//THIS ARCHITECTURE MAKES SELECTING A RENDER TARGET EASIER
import React from 'react';
import App from './containers/app'
import createHistory from 'history/createBrowserHistory';
import {initialState } from './state/initialState';
import { Router } from 'react-router-dom';
import configureStore from './configureStore';
import { AppContainer } from 'react-hot-loader';
import {Provider} from 'react-redux';
window.logger = console; // can be later changed for a propper logger

const history = createHistory();

let store = configureStore(initialState, history);// Create redux with history

export const launchApp = (customRender = render)=>{
      if (module.hot) {
        module.hot.accept('containers/app', () => {
          const NextApp = require('containers/app').default;
          customRender(NextApp);
        });
        customRender(App);
      } else {
        customRender(App);
      }
}


export const appWrapper = (NextApp,injectedStore = store, injectedHistory = history) => {
  return <AppContainer><Provider store={injectedStore}>
      <Router  history={injectedHistory}>
        <NextApp></NextApp>
      </Router>
  </Provider></AppContainer>
}
