import React from 'react';
import { Assignee, DropDownJoinUser } from './Assignee';
import useInputChange from '@hooks/useInputChange';
import { useMainState } from '@contexts/MainContext';
import { AssigneeContainer, AssigneeDropDownContainer } from './style';
import Filter from '@common/Filter';

export const AssigneeMenu = ({ additionalInfo, onClick }) => {
  return (
    <AssigneeContainer>
      <div className='assignee_header'>
        <div className='assignee_title'>Assignees</div>
        <div className='setting_btn' onClick={onClick}>
          <i className='fas fa-cog'></i>
        </div>
      </div>
      <ul>
        {additionalInfo.assignees.length ? (
          additionalInfo.assignees.map(assignee => (
            <Assignee key={assignee.id} assignee={assignee} />
          ))
        ) : (
          <li>No one - assign yourself</li>
        )}
      </ul>
    </AssigneeContainer>
  );
};

export const AssigneeMenuDropDown = ({ additionalInfo, setAdditionalInfo }) => {
  const [username, changeUsername] = useInputChange('');
  const { joinUsers } = useMainState();

  return (
    <AssigneeDropDownContainer>
      <div className='assign_title'>Assign up to 10 people to this issue</div>
      <Filter
        value={username}
        onChange={changeUsername}
        placeholder='Type or choose a name'
      />
      <ul>
        {joinUsers.map(joinUser => (
          <DropDownJoinUser
            additionalInfo={additionalInfo}
            setAdditionalInfo={setAdditionalInfo}
            key={joinUser.User.id}
            joinUser={joinUser}
          />
        ))}
      </ul>
    </AssigneeDropDownContainer>
  );
};
