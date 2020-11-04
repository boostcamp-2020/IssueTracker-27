import React, { useState } from 'react';
import { MilestoneItem } from './style';

const Milestone = ({ milestone, additionalInfo, setAdditionalInfo }) => {
  const isSelected =
    additionalInfo.milestone && additionalInfo.milestone.id === milestone.id;

  const clickMilestone = () => {
    if (isSelected) {
      setAdditionalInfo({ ...additionalInfo, milestone: null });
      return;
    }
    setAdditionalInfo({ ...additionalInfo, milestone });
  };

  return (
    <MilestoneItem onClick={clickMilestone}>
      {isSelected && (
        <div>
          <i className='fas fa-check'></i>
        </div>
      )}
      <section>
        <div className='milestone-title'>{milestone.title}</div>
        <div className='milestone-duedate'>
          {milestone.dueDate ? `${milestone.dueDate}` : 'No due date'}
        </div>
      </section>
    </MilestoneItem>
  );
};

export default Milestone;
