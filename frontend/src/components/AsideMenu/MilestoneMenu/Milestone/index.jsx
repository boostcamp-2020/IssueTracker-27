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
      <div className='blank'>
        {isSelected && (
          <div className='icon'>
            <i className='fas fa-check'></i>
          </div>
        )}
      </div>
      <section className='milestone_section'>
        <div className='milestone_title'>{milestone.title}</div>
        <div className='milestone_duedate'>
          {milestone.dueDate ? `${milestone.dueDate}` : 'No due date'}
        </div>
      </section>
    </MilestoneItem>
  );
};

export default Milestone;
