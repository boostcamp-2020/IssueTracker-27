import React from 'react';
import { MileStoneTileContainer } from './style';

// attributes: ['id', 'title', 'description', 'status', 'dueDate'],
const MileStoneTile = ({ milestone }) => {
  return (
    <MileStoneTileContainer>
      <div>
        <div>{milestone.title}</div>
        <div>{milestone.dueDate}</div>
        <div>{milestone.description}</div>
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
