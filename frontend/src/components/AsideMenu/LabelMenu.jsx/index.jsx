import React from 'react';
import { useSelector } from '@hooks/react-context';
import { LabelListContainer, LabelMenuDropDownContainer } from './style';
import { Label, DropDownLabel } from './Label';
import Filter from '@common/Filter';
import useInputChange from '@hooks/useInputChange';

export const LabelMenu = ({ additionalInfo }) => {
  return (
    <LabelListContainer>
      <div className='selected_labels'>
        {additionalInfo?.labels?.length ? (
          additionalInfo.labels.map(label => (
            <Label key={label.id} label={label}></Label>
          ))
        ) : (
          <li>None yet</li>
        )}
      </div>
    </LabelListContainer>
  );
};

export const LabelMenuDropDown = ({ additionalInfo, setAdditionalInfo }) => {
  const labels = useSelector(state => state.label);
  const [labelTitle, changeLabelTitle] = useInputChange('');

  return (
    <LabelMenuDropDownContainer additionalInfo={additionalInfo}>
      <div className='aside_drop_down_header'>Apply labels to this issue</div>
      <div className='aside_drop_down_filter'>
        <Filter
          value={labelTitle}
          onChange={changeLabelTitle}
          placeholder='Filter labels'
          isAside={true}
        />
      </div>
      <ul className='aside_drop_down_list aside_drop_down_list'>
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
