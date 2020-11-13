import React from 'react';
import LabelContextProvider from './LabelContext';
import IssueContextProvider from './IssueContext';
import JoinUserContextProvider from './JoinUserContext';
import SelectedIssueContextProvider from './SelectedIssueContext';
import MilestoneContextProvider from './MilestoneContext';
import FilterBaseContextProvider from './FilterBaseContext';
import MyInfoContextProvider from './MyInfoContext';

const ContextProvider = (...Provider) => {
  const MainContextProvider = ({ children }) => {
    let SubContextProvider = children;
    Provider.forEach(Prov => {
      SubContextProvider = <Prov>{SubContextProvider}</Prov>;
    });
    return SubContextProvider;
  };

  return ({ children }) => (
    <MainContextProvider>{children}</MainContextProvider>
  );
};

const MainContext = ContextProvider(
  LabelContextProvider,
  IssueContextProvider,
  JoinUserContextProvider,
  SelectedIssueContextProvider,
  MilestoneContextProvider,
  FilterBaseContextProvider,
  MyInfoContextProvider
);

export default MainContext;
