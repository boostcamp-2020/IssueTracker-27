import React from 'react';
import { DetailsBox } from '@common/DetailsBox';
import {
  ToolbarContainer,
  BaseOptionContainer,
  DetailOptionContainer
} from './style';
import AuthorList from './Author/AuthorList';
import LabelList from './Label/LabelList';
import MilestoneList from './Milestone/MilestoneList';
import AssigneeList from './Assignee/AssigneeList';

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
        <DetailsBox title='Author'>
          <AuthorList />
        </DetailsBox>
        <DetailsBox title='Label'>
          <LabelList />
        </DetailsBox>
        <DetailsBox title='Milestones'>
          <MilestoneList />
        </DetailsBox>
        <DetailsBox title='Assignee'>
          <AssigneeList />
        </DetailsBox>
      </DetailOptionContainer>
    </ToolbarContainer>
  );
};

export default Toolbar;
