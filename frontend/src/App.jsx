import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatchPage from './pages/NoMatchPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import MilestonePage from './pages/MilestonePage';
import LabelPage from './pages/LabelPage';
import NewIssuePage from './pages/NewIssuePage';
import Header from './components/common/Header';
import useCheckAuth from '@hooks/useCheckAuth';
import '../public/reset.css';
import styled from '@emotion/styled';
import IssueDetailPage from './pages/IssueDetailPage';

const MainContainer = styled.div`
  height: 90%;
  padding: 2rem;
  background-color: #f9f9f9;
`;

const App = () => {
  useCheckAuth();

  return (
    <>
      <Header />
      <MainContainer>
        <Switch>
          <Route path='/issue/:id' component={IssueDetailPage} />
          <Route path='/new-issue' component={NewIssuePage} />
          <Route path='/milestone' component={MilestonePage} />
          <Route path='/label' component={LabelPage} />
          <Route path='/login' component={LoginPage} />
          <Route exact path='/' component={MainPage} />
          <Route component={NoMatchPage} />
        </Switch>
      </MainContainer>
    </>
  );
};

export default App;
