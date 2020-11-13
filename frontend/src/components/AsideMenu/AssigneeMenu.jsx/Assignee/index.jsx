import React from 'react';
import { DropDownJoinUserContainer } from './style';

export const Assignee = ({ assignee }) => {
  return (
    <DropDownJoinUserContainer>
      {assignee?.JoinUser?.id ? (
        <>
          <span>
            <img src={assignee.JoinUser.User.profileImage} alt='profile'></img>
          </span>
          <span>{assignee.JoinUser.User.username}</span>
        </>
      ) : (
        <span>No assignees</span>
      )}
    </DropDownJoinUserContainer>
  );
};

export const DropDownJoinUser = ({
  additionalInfo,
  joinUser,
  setAdditionalInfo
}) => {
  const isSelected = additionalInfo?.assignees?.length
    ? additionalInfo.assignees.some(
        selectedAssignee =>
          selectedAssignee.JoinUser.User.id === joinUser.User.id
      )
    : '';
  const clickAssignee = () => {
    if (!isSelected) {
      return setAdditionalInfo({
        ...additionalInfo,
        assignees: [
          ...additionalInfo.assignees,
          { JoinUser: joinUser, id: joinUser.id }
        ]
      });
    }
    const remainAssignees = additionalInfo.assignees.filter(
      assignee => assignee.JoinUser.User.id != joinUser.User.id
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
        <img src={joinUser?.User?.profileImage} alt='profile'></img>
      </span>
      <span>{joinUser?.User?.username}</span>
    </DropDownJoinUserContainer>
  );
};
