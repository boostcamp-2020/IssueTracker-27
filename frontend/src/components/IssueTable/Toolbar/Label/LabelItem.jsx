import React from 'react';
import { useDispatch } from '@hooks/react-context';
import { addSomeKeyAction, removeSomeKeyAction } from '@contexts';
import { ItemWrapper, LabelColorBox } from '../style';

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
    <ItemWrapper onClick={checked ? onRemove : onClick}>
      {checked && 'V'}
      <LabelColorBox color={label.color} />
      {label.title}
    </ItemWrapper>
  );
};

export default LabelItem;
