import React from 'react';
import { useMainState } from '@contexts/MainContext';
import IssueDetail from '@components/IssueDetail';

const IssueDetailPage = ({ match }) => {
  const issueId = match.params.id;
  const { issues } = useMainState();

  const [issue] = issues.filter(issue => issue.id === parseInt(issueId));
  console.log(issue);
  return (
    <>
      <IssueDetail issue={issue} />
    </>
  );
};

export default IssueDetailPage;
