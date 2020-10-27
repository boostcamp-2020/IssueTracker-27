import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Main from './pages/Main';
import Login from './pages/Login';
import '../public/reset.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/main' component={Main} />
        <Route exact path='/' component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};

export default App;
