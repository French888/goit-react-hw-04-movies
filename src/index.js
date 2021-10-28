import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import {BrowserRouter as Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <Route>
    <App />
    </Route>
  </React.StrictMode>,
  document.getElementById('root')
);