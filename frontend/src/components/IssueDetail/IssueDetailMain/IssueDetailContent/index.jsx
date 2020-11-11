import React from 'react';
import { useSelector } from '@hooks/react-context';

const IssueDetailContent = () => {
  const selectedIssue = useSelector(state => state.selectedIssue);
  const { id, openAt, status, title, description, JoinUser } = selectedIssue;

  return (
    <>
      <img
        src={JoinUser?.User.profileImage}
        alt='유저 이미지'
        width={100}
        height={100}
      />
      <div>
        {title}
        {description}
      </div>
    </>
  );
};

export default IssueDetailContent;
