import React from 'react';
import { useMainState } from '@contexts/MainContext';
import { LabelMenuContainer, LabelMenuDropDownContainer } from './style';
import { Label, DropDownLabel } from './Label';
import Filter from '@common/Filter';
import useInputChange from '@hooks/useInputChange';

export const LabelMenu = ({ additionalInfo, setAdditionalInfo, onClick }) => {
  return (
    <LabelMenuContainer>
      <div className='label_header'>
        <div className='label_title'>Labels</div>
        <div className='label_setting_btn' onClick={onClick}>
          <i className='fas fa-cog'></i>
        </div>
      </div>
      <ul className='label_selected'>
        {additionalInfo.labels.length ? (
          additionalInfo.labels.map(label => (
            <Label key={label.id} label={label}></Label>
          ))
        ) : (
          <li>None yet</li>
        )}
      </ul>
    </LabelMenuContainer>
  );
};

export const LabelMenuDropDown = ({ additionalInfo, setAdditionalInfo }) => {
  const { labels } = useMainState();
  const [labelTitle, changeLabelTitle] = useInputChange('');

  return (
    <LabelMenuDropDownContainer additionalInfo={additionalInfo}>
      <div>Apply labels to this issue</div>
      <Filter
        value={labelTitle}
        onChange={changeLabelTitle}
        placeholder='Filter labels'
      />
      <ul>
        {labels.length ? (
          labels.map(label => (
            <DropDownLabel
              key={label.id}
              label={label}
              additionalInfo={additionalInfo}
              setAdditionalInfo={setAdditionalInfo}
            />
          ))
        ) : (
          <div>No Labels</div>
        )}
      </ul>
    </LabelMenuDropDownContainer>
  );
};
