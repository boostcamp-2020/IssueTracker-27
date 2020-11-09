import React from 'react';
import styled from '@emotion/styled';
import { DropDownJoinUserContainer } from './style';

export const Assignee = ({ assignee }) => {
  return (
    <DropDownJoinUserContainer>
      <span>
        <img src={assignee.User.profileImage} alt='profile'></img>
      </span>
      <span>{assignee.User.username}</span>
    </DropDownJoinUserContainer>
  );
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
    <DropDownJoinUserContainer onClick={clickAssignee}>
      {isSelected && (
        <span className='check_mark'>
          <i className='fas fa-check'></i>
        </span>
      )}
      <span>
        <img src={joinUser.User.profileImage} alt='profile'></img>
      </span>
      <span>{joinUser.User.username}</span>
    </DropDownJoinUserContainer>
  );
};
