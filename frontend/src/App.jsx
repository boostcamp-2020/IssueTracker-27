import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatchPage from './pages/NoMatchPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import MilestonePage from './pages/MilestonePage';
import LabelPage from './pages/LabelPage';
import NewIssuePage from './pages/NewIssuePage';
import Header from './components/common/Header';
import '../public/reset.css';
import { ContextProvider } from './contexts/MainContext';

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route path='/new-issue' component={NewIssuePage} />
          <Route path='/milestone' component={MilestonePage} />
          <Route path='/label' component={LabelPage} />
          <Route path='/main' component={MainPage} />
          <Route exact path='/' component={LoginPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
    </ContextProvider>
  );
};

export default App;
