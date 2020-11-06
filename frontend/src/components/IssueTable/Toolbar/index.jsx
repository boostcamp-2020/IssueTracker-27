import React from 'react';
import { DetailsBox } from '@common/DetailsBox';
import {
  ToolbarContainer,
  BaseOptionContainer,
  DetailOptionContainer
} from './style';

const Toolbar = ({ isCheckAll, toggleIsCheckAll, checkedNumber }) => {
  return (
    <ToolbarContainer>
      <BaseOptionContainer>
        <input
          type='checkbox'
          checked={isCheckAll}
          onChange={toggleIsCheckAll}
        />
        <span>{checkedNumber ? `${checkedNumber} selected` : ''}</span>
      </BaseOptionContainer>

      <DetailOptionContainer>
        <DetailsBox title='Author'></DetailsBox>
        <DetailsBox title='Label'></DetailsBox>
        <DetailsBox title='Projects'></DetailsBox>
        <DetailsBox title='Milestones'></DetailsBox>
        <DetailsBox title='Assignee'></DetailsBox>
        <DetailsBox title='Sort'></DetailsBox>
      </DetailOptionContainer>
    </ToolbarContainer>
  );
};

export default Toolbar;
