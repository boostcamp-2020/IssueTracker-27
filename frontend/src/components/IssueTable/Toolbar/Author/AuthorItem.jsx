import React from 'react';
import { useDispatch } from '@hooks/react-context';
import { changeSomeKeyAction } from '@contexts';
import { CheckBox, ItemWrapper, UserImageBox } from '../style';

const AuthorItem = ({ author, checked }) => {
  const filterBaseDispatch = useDispatch(dispatch => dispatch.filterBase);

  const onClick = () => {
    filterBaseDispatch(
      changeSomeKeyAction({
        key: 'author',
        value: author
      })
    );
  };

  const onRemove = () => {
    filterBaseDispatch(
      changeSomeKeyAction({
        key: 'author',
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
        <img src={author.User.profileImage} alt='유저 프로필'></img>
      </UserImageBox>
      {author.User.username}
    </ItemWrapper>
  );
};

export default AuthorItem;
