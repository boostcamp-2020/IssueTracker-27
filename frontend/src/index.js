import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import MainContext from './contexts';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDom.render(
  <MainContext>
    <Router>
      <App />
    </Router>
  </MainContext>,
  document.getElementById('root')
);
