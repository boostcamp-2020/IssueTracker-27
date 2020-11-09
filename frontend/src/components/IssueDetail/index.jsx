import React from 'react';
import IssueDetailHeader from './IssueDetailHeader';
import IssueDetailMain from '@components/IssueDetail/IssueDetailMain';

const IssueDetail = ({ issue }) => {
  const {
    id,
    openAt,
    status,
    title,
    description,
    JoinUser,
    Assignees,
    IssueLabels
  } = issue;
  const { User } = JoinUser;

  return (
    <>
      <IssueDetailHeader
        issueId={id}
        title={title}
        status={status}
        userName={User.username}
        openAt={openAt}
      />
      <IssueDetailMain
        title={title}
        description={description}
        profileImage={User.profileImage}
      />
      메인 내용 적은거 comment asidmenu
    </>
  );
};

export default IssueDetail;
