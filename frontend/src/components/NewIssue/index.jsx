import React from 'react';
import InputSection from './InputSection';
import ProfilePicture from './ProfilePicture';
import NewIssueContainer from './style';

const NewIssue = () => {
  return (
    <NewIssueContainer>
      <ProfilePicture />
      <InputSection />
    </NewIssueContainer>
  );
};

export default NewIssue;
