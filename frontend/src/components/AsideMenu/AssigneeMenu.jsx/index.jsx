import React from 'react';
import { Assignee, DropDownJoinUser } from './Assignee';
import useInputChange from '@hooks/useInputChange';
import { useSelector } from '@hooks/react-context';
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
  const joinUsers = useSelector(state => state.joinUser);

  return (
    <AssigneeDropDownContainer>
      <div className='aside_drop_down_header'>
        Assign up to 10 people to this issue
      </div>
      <div className='aside_drop_down_filter'>
        <Filter
          value={username}
          onChange={changeUsername}
          placeholder='Type or choose a name'
          isAside={true}
        />
      </div>
      <ul className='aside_drop_down_list'>
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
