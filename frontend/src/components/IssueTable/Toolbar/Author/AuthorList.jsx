import React from 'react';
import { useSelector } from '@hooks/react-context';
import BasicPopup from '../BasicPopup';
import AuthorItem from './AuthorItem';

const AuthorList = () => {
  const authors = useSelector(state => state.joinUser);
  const filterBase = useSelector(state => state.filterBase);

  return (
    <BasicPopup title='authors' placeholder='filter users'>
      {authors?.length ? (
        <ul>
          {authors.map(author => (
            <AuthorItem
              key={author.id}
              author={author}
              checked={filterBase.author === author}
            />
          ))}
        </ul>
      ) : (
        <div>No data</div>
      )}
    </BasicPopup>
  );
};

export default AuthorList;
