import React from 'react';
import { useDispatch } from '@hooks/react-context';
import { changeSomeKeyAction } from '@contexts';

const MilestoneItem = ({ milestone, checked }) => {
  const filterBaseDispatch = useDispatch(dispatch => dispatch.filterBase);

  const onClick = () => {
    filterBaseDispatch(
      changeSomeKeyAction({
        key: 'milestone',
        value: milestone
      })
    );
  };
  const onRemove = () => {
    filterBaseDispatch(
      changeSomeKeyAction({
        key: 'milestone',
        value: {}
      })
    );
  };

  return (
    <li onClick={checked ? onRemove : onClick}>
      {checked && 'V'}
      {milestone.title}
    </li>
  );
};

export default MilestoneItem;
