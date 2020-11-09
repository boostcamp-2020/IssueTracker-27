import React from 'react';
import { MileStoneTileContainer } from './style';

// attributes: ['id', 'title', 'description', 'status', 'dueDate'],
const MileStoneTile = ({ milestones }) => {

  return (
    <MileStoneTileContainer>
      <div>
        <div>{milestones.title}</div>
        <div>{milestones.dueDate}</div>
        <div>{milestones.description}</div>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>

    </MileStoneTileContainer>
  );
};

export default MileStoneTile;
