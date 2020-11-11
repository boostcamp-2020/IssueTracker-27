import React from 'react';
import { useSelector } from '@hooks/react-context';
import BasicPopup from '../BasicPopup';
import MilestoneItem from './MilestoneItem';

const MilestoneList = () => {
  const milestones = useSelector(state => state.milestone);
  const filterBase = useSelector(state => state.filterBase);

  return (
    <BasicPopup title='authors' placeholder='filter milestones'>
      {milestones?.length ? (
        <ul>
          {milestones.map(milestone => (
            <MilestoneItem
              key={milestone.id}
              milestone={milestone}
              checked={filterBase.milestone === milestone}
            />
          ))}
        </ul>
      ) : (
        <div>No Data</div>
      )}
    </BasicPopup>
  );
};

export default MilestoneList;
