import React from 'react';
import { useSelector } from '@hooks/react-context';
import IssueDetailHeader from './IssueDetailHeader';
import IssueDetailMain from '@components/IssueDetail/IssueDetailMain';

const IssueDetail = () => {
  const selectedIssue = useSelector(state => state.selectedIssue);
  console.log(selectedIssue);
  const {
    id,
    openAt,
    status,
    title,
    description,
    JoinUser,
    Assignees,
    IssueLabels
  } = selectedIssue;

  return (
    selectedIssue && (
      <>
        <IssueDetailHeader
          issueId={id}
          title={title}
          status={status}
          userName={JoinUser?.User.username}
          openAt={openAt}
        />
        <IssueDetailMain
          title={title}
          description={description}
          profileImage={JoinUser?.User.profileImage}
        />
        메인 내용 적은거 comment asidmenu
      </>
    )
  );
};

export default IssueDetail;
