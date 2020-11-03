import React from 'react';
import { LabelItem } from './style';

const Label = ({ label }) => {
  return (
    <LabelItem color={label.color} key={label.id}>
      {label.title}
    </LabelItem>
  );
};

export default Label;
