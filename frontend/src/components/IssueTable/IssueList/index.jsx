import React from 'react';
import Issue from './Issue';
import {IssueItems} from './style';

const IssueList = ({issues}) => {
    return (
      <IssueItems>
        {issues.map(issue => (
          <Issue key={issue.id} issue={issue} />
        ))}
      </IssueItems>
    );
};

export default IssueList;