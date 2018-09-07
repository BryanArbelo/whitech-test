import 'raf/polyfill'; // react needs this on its latest version
import 'babel-polyfill'; // needed for sagas
import React from 'react';
import ReactDOM from 'react-dom'
import {appWrapper, launchApp} from './root';
import 'semantic-ui-css/semantic.min.css';
import './style/main.scss';
window.logger = console; // can be later changed for a propper logger

const MOUNT_NODE = document.getElementById('app');

const render = (NextApp) => {
  ReactDOM.render(appWrapper(NextApp), MOUNT_NODE);
};

launchApp(render)
