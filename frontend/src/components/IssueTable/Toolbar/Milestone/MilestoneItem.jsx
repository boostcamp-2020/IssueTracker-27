import React from 'react';
import { useDispatch } from '@hooks/react-context';
import { changeSomeKeyAction } from '@contexts';
import { CheckBox, ItemWrapper } from '../style';

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
    <ItemWrapper onClick={checked ? onRemove : onClick}>
      <CheckBox>
        {checked && (
          <span>
            <i className='fas fa-check'></i>
          </span>
        )}
      </CheckBox>
      {milestone.title}
    </ItemWrapper>
  );
};

export default MilestoneItem;
