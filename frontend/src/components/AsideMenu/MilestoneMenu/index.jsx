import React from 'react';
import SideBox from '@common/SideBox';
import { useMainState } from '@contexts/MainContext';
import Milestone from './Milestone';
import Filter from '@common/Filter';
import useInputChange from '@hooks/useInputChange';
import { MilestoneMenuContainer, MilestoneContainer } from './style';

export const MilestoneMenu = ({ onClick, additionalInfo }) => {
  return (
    <MilestoneMenuContainer>
      <section className='milestone-menu-title'>
        <div className='title'>Milestone</div>
        <div className='icon' onClick={onClick}>
          <i className='fas fa-cog'></i>
        </div>
      </section>
      <section className='milestone-menu-content'>
        {additionalInfo.milestone ? (
          <>
            <div className='graph'></div>
            <div className='milestone-menu-content-title'>
              {additionalInfo.milestone.title}
            </div>
          </>
        ) : (
          <div>No milestone</div>
        )}
      </section>
    </MilestoneMenuContainer>
  );
};

export const MilestoneDropDown = ({ additionalInfo, setAdditionalInfo }) => {
  const { milestones } = useMainState();
  const [milestoneInput, changeMilestoneInput] = useInputChange('');

  return (
    <MilestoneContainer>
      <div className='milestone_list_header'>Set milestone</div>
      <Filter
        value={milestoneInput}
        onChange={changeMilestoneInput}
        placeholder={'Filter milestones'}
      />
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
