import React from 'react';
import styled from '@emotion/styled';
import Toolbar from './Toolbar';
import IssueList from './IssueList';
import IssueTableContainer from './style';

const IssueTable = ({issues}) => {
    return (
      <IssueTableContainer>
        <Toolbar/>
        <IssueList issues={issues}/>
      </IssueTableContainer>
    );
};

export default IssueTable;