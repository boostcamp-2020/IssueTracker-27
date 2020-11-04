import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { ContextProvider } from './contexts/MainContext';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDom.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById('root')
);
