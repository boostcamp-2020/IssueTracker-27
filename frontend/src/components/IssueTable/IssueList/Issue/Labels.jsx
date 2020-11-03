import React from 'react';
import Label from './Label';

const Labels = ({ issueLabels }) => {
  return (
    <>
      {issueLabels?.map(({ Label: label }) => (
        <Label key={label.id} label={label} />
      ))}
    </>
  );
};

export default Labels;
