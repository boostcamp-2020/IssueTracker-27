import React from 'react';
import SideBox from '@common/SideBox';
import { useMilestoneState } from '@contexts';
import Milestone from './Milestone';
import Filter from '@common/Filter';
import useInputChange from '@hooks/useInputChange';
import { MilestoneSelected, MilestoneContainer } from './style';

export const MilestoneMenu = ({ additionalInfo }) => {
  return (
    <MilestoneSelected>
      {additionalInfo.milestone ? (
        <>
          <div className='graph'></div>
          <div className='milestone_selected_title'>
            {additionalInfo.milestone.title}
          </div>
        </>
      ) : (
        <div>No milestone</div>
      )}
    </MilestoneSelected>
  );
};

export const MilestoneDropDown = ({ additionalInfo, setAdditionalInfo }) => {
  const milestones = useMilestoneState();
  const [milestoneInput, changeMilestoneInput] = useInputChange('');

  return (
    <MilestoneContainer>
      <div className='aside_drop_down_header'>Set milestone</div>
      <div className='aside_drop_down_filter'>
        <Filter
          value={milestoneInput}
          onChange={changeMilestoneInput}
          placeholder={'Filter milestones'}
          isAside={true}
        />
      </div>
      <ul className='milestone_list_content'>
        {milestones.map(milestone => (
          <Milestone
            key={milestone.id}
            milestone={milestone}
            setAdditionalInfo={setAdditionalInfo}
            additionalInfo={additionalInfo}
          />
        ))}
      </ul>
    </MilestoneContainer>
  );
};
