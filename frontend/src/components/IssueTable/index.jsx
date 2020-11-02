import React from 'react';
import styled from '@emotion/styled';
import Toolbar from './Toolbar';
import IssueList from './IssueList';
import IssueTableContainer from './style';

const IssueTable = () => {
  return (
    <IssueTableContainer>
      <Toolbar />
      <IssueList />
    </IssueTableContainer>
  );
};

export default IssueTable;
