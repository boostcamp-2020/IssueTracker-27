import React from 'react';
import styled from '@emotion/styled';

export const Assignee = ({ assignee }) => {
  return <li>{assignee.User.username}</li>;
};

export const DropDownJoinUser = ({
  additionalInfo,
  joinUser,
  setAdditionalInfo
}) => {
  const isSelected = additionalInfo.assignees.some(
    selectedAssignee => selectedAssignee.id === joinUser.User.id
  );
  const clickAssignee = () => {
    if (!isSelected) {
      return setAdditionalInfo({
        ...additionalInfo,
        assignees: [...additionalInfo.assignees, joinUser]
      });
    }
    const remainAssignees = additionalInfo.assignees.filter(
      assignee => assignee.User.id != joinUser.User.id
    );
    setAdditionalInfo({ ...additionalInfo, assignees: remainAssignees });
  };

  return (
    <li onClick={clickAssignee}>
      {isSelected && (
        <span>
          <i className='fas fa-check'></i>
        </span>
      )}
      {/* <img src={joinUser.User.profileImage} alt='profile'></img> |{' '} */}
      {joinUser.User.username}
    </li>
  );
};
