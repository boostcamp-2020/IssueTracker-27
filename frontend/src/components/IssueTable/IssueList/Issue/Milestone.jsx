import React from 'react';
import { MilestoneWrapper } from './style';

const Milestone = ({ milestone }) => {
  return (
    <MilestoneWrapper>
      <i className='far fa-flag'></i>
      {milestone.title}
    </MilestoneWrapper>
  );
};

export default Milestone;
