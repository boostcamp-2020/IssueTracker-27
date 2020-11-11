import React, { useEffect } from 'react';
import { loadSelectedIssuesAction } from '@contexts';
import { useDispatch } from '@hooks/react-context';
import IssueDetail from '@components/IssueDetail';
import { axios } from '@api';

const IssueDetailPage = ({ match }) => {
  const issueId = parseInt(match.params.id);

  const selectedIssueDispatch = useDispatch(dispatch => dispatch.selectedIssue);

  const getIssue = async () => {
    const { data } = await axios.get(`/api/issue/${issueId}`);
    const issue = data.issue;
    selectedIssueDispatch(loadSelectedIssuesAction(issue));
  };

  useEffect(() => {
    getIssue();
  }, []);

  return (
    <>
      <IssueDetail />
    </>
  );
};

export default IssueDetailPage;
