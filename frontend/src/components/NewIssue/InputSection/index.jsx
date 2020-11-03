import React, { useState } from 'react';
import IssueAside from './IssueAside';
import IssueForm from './IssueForm';

const InputSection = () => {
  const [additionalInfo, setAdditionalInfo] = useState({
    assignees: [],
    labels: [],
    milestone: null
  });

  return (
    <>
      <IssueForm additionalInfo={additionalInfo} />
      <IssueAside
        additionalInfo={additionalInfo}
        setAdditionalInfo={setAdditionalInfo}
      />
    </>
  );
};

export default InputSection;
