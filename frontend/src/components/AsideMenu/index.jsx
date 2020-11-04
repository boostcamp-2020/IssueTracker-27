import React from 'react';
import SideBoxContainer from '@common/SideBox';
import { AsideMenuContainer, AsideMenuHeaderContainer } from './style';
import {
  LabelMenu,
  LabelMenuDropDown
} from '@components/AsideMenu/LabelMenu.jsx';
import {
  AssigneeMenu,
  AssigneeMenuDropDown
} from '@components/AsideMenu/AssigneeMenu.jsx';
import {
  MilestoneMenu,
  MilestoneDropDown
} from '@components/AsideMenu/MilestoneMenu';

const AsideMenuHeader = ({ title, onClick, children }) => {
  return (
    <AsideMenuHeaderContainer>
      <div className='aside_menu_header'>
        <div className='aside_menu_title'>{title}</div>
        <div className='aside_menu_setting_btn' onClick={onClick}>
          <i className='fas fa-cog'></i>
        </div>
      </div>
      {children}
    </AsideMenuHeaderContainer>
  );
};

const AsideMenu = ({ additionalInfo, setAdditionalInfo }) => {
  return (
    <AsideMenuContainer>
      <SideBoxContainer
        FirstChild={onClick => (
          <AsideMenuHeader title='Assignees' onClick={onClick}>
            <AssigneeMenu additionalInfo={additionalInfo} />
          </AsideMenuHeader>
        )}
        SecondChild={
          <AssigneeMenuDropDown
            additionalInfo={additionalInfo}
            setAdditionalInfo={setAdditionalInfo}
          />
        }
      />
      <SideBoxContainer
        FirstChild={onClick => (
          <AsideMenuHeader title='Labels' onClick={onClick}>
            <LabelMenu additionalInfo={additionalInfo} />
          </AsideMenuHeader>
        )}
        SecondChild={
          <LabelMenuDropDown
            additionalInfo={additionalInfo}
            setAdditionalInfo={setAdditionalInfo}
          />
        }
      />
      <SideBoxContainer
        FirstChild={onClick => (
          <AsideMenuHeader title='Milestone' onClick={onClick}>
            <MilestoneMenu additionalInfo={additionalInfo} />
          </AsideMenuHeader>
        )}
        SecondChild={
          <MilestoneDropDown
            additionalInfo={additionalInfo}
            setAdditionalInfo={setAdditionalInfo}
          />
        }
      />
    </AsideMenuContainer>
  );
};

export default AsideMenu;
