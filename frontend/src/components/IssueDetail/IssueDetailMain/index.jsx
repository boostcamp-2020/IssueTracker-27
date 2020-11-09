import React from 'react';

const IssueDetailMain = ({ title, description, profileImage }) => {
  return (
    <>
      <img src={profileImage} alt='유저 이미지' width={100} height={100} />
      <div>
        {title}
        {description}
      </div>
    </>
  );
};

export default IssueDetailMain;
