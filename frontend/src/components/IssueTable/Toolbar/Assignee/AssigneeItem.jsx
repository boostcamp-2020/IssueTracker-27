import React from 'react';
import { useDispatch } from '@hooks/react-context';
import { changeSomeKeyAction } from '@contexts';

const AssigneeItem = ({ assignee, checked }) => {
  const filterBaseDispatch = useDispatch(dispatch => dispatch.filterBase);

  const onClick = () => {
    filterBaseDispatch(
      changeSomeKeyAction({
        key: 'assignee',
        value: assignee
      })
    );
  };

  const onRemove = () => {
    filterBaseDispatch(
      changeSomeKeyAction({
        key: 'assignee',
        value: {}
      })
    );
  };

  return (
    <li onClick={checked ? onRemove : onClick}>
      {checked && 'V'}
      {assignee.User.username}
    </li>
  );
};

export default AssigneeItem;
