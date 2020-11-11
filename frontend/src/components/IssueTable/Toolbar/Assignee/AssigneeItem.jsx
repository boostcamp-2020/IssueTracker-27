import React from 'react';
import { useDispatch } from '@hooks/react-context';
import { changeSomeKeyAction } from '@contexts';
import { CheckBox, ItemWrapper, UserImageBox } from '../style';

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
    <ItemWrapper onClick={checked ? onRemove : onClick}>
      <CheckBox>
        {checked && (
          <span>
            <i className='fas fa-check'></i>
          </span>
        )}
      </CheckBox>
      <UserImageBox>
        <img src={assignee.User.profileImage} alt='유저 프로필'></img>
      </UserImageBox>
      {assignee.User.username}
    </ItemWrapper>
  );
};

export default AssigneeItem;
