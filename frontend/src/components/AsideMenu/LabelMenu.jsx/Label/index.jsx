import React from 'react';
import { LabelContainer, DropDownLabelContainer } from './style';

export const Label = ({ label }) => {
  return <LabelContainer bgcolor={label.color}>{label.title}</LabelContainer>;
};

export const DropDownLabel = ({ label, additionalInfo, setAdditionalInfo }) => {
  const isSelected =
    additionalInfo?.labels?.length &&
    additionalInfo.labels.some(selectedLabel => selectedLabel.id === label.id);

  const clickLabel = () => {
    if (isSelected) {
      const withoutSelected = additionalInfo.labels.filter(
        selectedLabel => selectedLabel.id != label.id
      );
      setAdditionalInfo({ ...additionalInfo, labels: withoutSelected });
    } else {
      setAdditionalInfo({
        ...additionalInfo,
        labels: [...additionalInfo.labels, label]
      });
    }
  };

  return (
    <DropDownLabelContainer onClick={clickLabel} bgcolor={label.color}>
      {isSelected ? (
        <span className='check_mark'>
          <span>
            <i className='fas fa-check'></i>
          </span>
        </span>
      ) : (
        <span className='check_mark'></span>
      )}
      <div className='drop_down_label_content'>
        <div className='drop_down_content_header'>
          <div className='drop_down_color'></div>
          <div className='drop_down_title'>{label.title}</div>
        </div>
        <div className='drop_down_description'>{label.description}</div>
      </div>
    </DropDownLabelContainer>
  );
};
