import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HeaderArea from './HeaderArea/HeaderArea'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <HeaderArea/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();