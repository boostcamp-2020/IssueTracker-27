import React from 'react';
import SideBoxContainer from '../../common/SideBox';
import { LabelMenu, LabelMenuDropDown } from '../../AsideMenu/LabelMenu.jsx';
import {
  AssigneeMenu,
  AssigneeMenuDropDown
} from '../../AsideMenu/AssigneeMenu.jsx';
import {
  MilestoneMenu,
  MilestoneDropDown
} from '../../AsideMenu/MilestoneMenu';

const IssueAside = ({ additionalInfo, setAdditionalInfo }) => {
  return (
    <>
      <SideBoxContainer
        FirstChild={onClick => (
          <AssigneeMenu
            additionalInfo={additionalInfo}
            setAdditionalInfo={setAdditionalInfo}
            onClick={onClick}
          />
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
          <LabelMenu
            additionalInfo={additionalInfo}
            setAdditionalInfo={setAdditionalInfo}
            onClick={onClick}
          />
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
          <MilestoneMenu
            additionalInfo={additionalInfo}
            setAdditionalInfo={setAdditionalInfo}
            onClick={onClick}
          />
        )}
        SecondChild={
          <MilestoneDropDown
            additionalInfo={additionalInfo}
            setAdditionalInfo={setAdditionalInfo}
          />
        }
      />
    </>
  );
};

export default IssueAside;
