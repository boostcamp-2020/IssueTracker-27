import React from 'react';
import { useDispatch } from '@hooks/react-context';
import { changeSomeKeyAction } from '@contexts';

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
    <li onClick={checked ? onRemove : onClick}>
      {checked && 'V'}
      {author.User.username}
    </li>
  );
};

export default AuthorItem;
