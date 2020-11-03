import React from 'react';
import { LabelContainer, DropDownLabelContainer } from './style';

export const Label = ({ label }) => {
  return (
    <LabelContainer color={label.color}>
      <div>{label.title}</div>
    </LabelContainer>
  );
};

export const DropDownLabel = ({ label, additionalInfo, setAdditionalInfo }) => {
  const isSelected = additionalInfo.labels.some(
    selectedLabel => selectedLabel.id === label.id
  );

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
    <DropDownLabelContainer onClick={clickLabel}>
      <div>{isSelected ? 'O' : 'X'}</div>
      <div>{label.color}</div>
      <div>{label.title}</div>
      <div>{label.description}</div>
    </DropDownLabelContainer>
  );
};
