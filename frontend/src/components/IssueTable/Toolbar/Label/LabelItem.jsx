import React from 'react';
import { useDispatch } from '@hooks/react-context';
import { addSomeKeyAction, removeSomeKeyAction } from '@contexts';

const LabelItem = ({ label, checked }) => {
  const filterBaseDispatch = useDispatch(dispatch => dispatch.filterBase);

  const onClick = () => {
    filterBaseDispatch(
      addSomeKeyAction({
        key: 'labels',
        value: label
      })
    );
  };
  const onRemove = () => {
    filterBaseDispatch(
      removeSomeKeyAction({
        key: 'labels',
        value: label
      })
    );
  };

  return (
    <li onClick={checked ? onRemove : onClick}>
      {checked && 'V'}
      {label.title}
    </li>
  );
};

export default LabelItem;
