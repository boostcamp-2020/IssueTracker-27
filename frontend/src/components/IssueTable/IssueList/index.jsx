import React from 'react';
import Issue from './Issue';
import { IssueItems } from './style';
import { useMainState } from '../../../contexts/MainContext';

const IssueList = () => {
  const { issues } = useMainState();

  return (
    <IssueItems>
      {issues.map(issue => (
        <Issue key={issue.id} issue={issue} />
      ))}
    </IssueItems>
  );
};

export default IssueList;
