import React from 'react';
import { Assignee, DropDownJoinUser } from './Assignee';
import useInputChange from '@hooks/useInputChange';
import { useMainState } from '@contexts/MainContext';
import { AssigneeList, AssigneeDropDownContainer } from './style';
import Filter from '@common/Filter';

export const AssigneeMenu = ({ additionalInfo }) => {
  return (
    <AssigneeList>
      {additionalInfo.assignees.length ? (
        additionalInfo.assignees.map(assignee => (
          <Assignee key={assignee.id} assignee={assignee} />
        ))
      ) : (
        <li>No one - assign yourself</li>
      )}
    </AssigneeList>
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
