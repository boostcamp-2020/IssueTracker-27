import React from 'react';
import { useMainState } from '@contexts/MainContext';
import { LabelListContainer, LabelMenuDropDownContainer } from './style';
import { Label, DropDownLabel } from './Label';
import Filter from '@common/Filter';
import useInputChange from '@hooks/useInputChange';

export const LabelMenu = ({ additionalInfo }) => {
  return (
    <LabelListContainer>
      {additionalInfo.labels.length ? (
        additionalInfo.labels.map(label => (
          <Label key={label.id} label={label}></Label>
        ))
      ) : (
        <li>None yet</li>
      )}
    </LabelListContainer>
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
