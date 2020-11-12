import React from 'react';
import { useSelector } from '@hooks/react-context';
import BasicPopup from '../BasicPopup';
import AssigneeItem from './AssigneeItem';

const AssigneeList = () => {
  const assignees = useSelector(state => state.joinUser);
  const filterBase = useSelector(state => state.filterBase);

  return (
    <BasicPopup title='assignees' placeholder='filter users'>
      {assignees?.length ? (
        <ul>
          {assignees.map(assignee => (
            <AssigneeItem
              key={assignee.id}
              assignee={assignee}
              checked={filterBase.assignee === assignee}
            />
          ))}
        </ul>
      ) : (
        <div>No data</div>
      )}
    </BasicPopup>
  );
};

export default AssigneeList;
