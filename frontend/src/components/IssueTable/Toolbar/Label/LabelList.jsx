import React from 'react';
import { useSelector } from '@hooks/react-context';
import BasicPopup from '../BasicPopup';
import LabelItem from './LabelItem';

const LabelList = () => {
  const labels = useSelector(state => state.label);
  const filterBase = useSelector(state => state.filterBase);

  return (
    <BasicPopup title='labels' placeholder='filter labels'>
      {labels?.length ? (
        <ul>
          {' '}
          {labels.map(label => (
            <LabelItem
              key={label.id}
              label={label}
              checked={filterBase.labels.includes(label)}
            />
          ))}
        </ul>
      ) : (
        <div>No Data</div>
      )}
    </BasicPopup>
  );
};

export default LabelList;
