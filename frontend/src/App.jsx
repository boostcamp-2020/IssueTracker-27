import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Main from './pages/Main';
import Login from './pages/Login';
import Milestone from './pages/Milestone';
import Label from './pages/Label';
import NewIssue from './pages/NewIssue';
import Header from './components/common/Header';
import '../public/reset.css';

const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/new-issue' component={NewIssue}/>
        <Route path='/milestone' component={Milestone} />
        <Route path='/label' component={Label} />
        <Route path='/main' component={Main} />
        <Route exact path='/' component={Login} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};

export default App;