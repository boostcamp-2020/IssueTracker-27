import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatchPage from './pages/NoMatchPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import MilestonePage from './pages/MilestonePage';
import LabelPage from './pages/LabelPage';
import NewIssuePage from './pages/NewIssuePage';
import Header from './components/common/Header';
import useCheckAuth from '@hooks/useCheckAuth';
import '../public/reset.css';

const App = () => {
  useCheckAuth();

  return (
    <>
      <Header />
      <Switch>
        <Route path='/new-issue' component={NewIssuePage} />
        <Route path='/milestone' component={MilestonePage} />
        <Route path='/label' component={LabelPage} />
        <Route path='/login' component={LoginPage} />
        <Route exact path='/' component={MainPage} />
        <Route component={NoMatchPage} />
      </Switch>
    </>
  );
};

export default App;
