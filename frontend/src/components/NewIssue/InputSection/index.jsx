import React, { useState } from 'react';
import IssueAside from '@components/AsideMenu';
import IssueForm from './IssueForm';
import InputSectionContainer from './style';

const InputSection = () => {
  const [additionalInfo, setAdditionalInfo] = useState({
    assignees: [],
    labels: [],
    milestone: null
  });

  return (
    <InputSectionContainer>
      <IssueForm additionalInfo={additionalInfo} />
      <IssueAside
        additionalInfo={additionalInfo}
        setAdditionalInfo={setAdditionalInfo}
      />
    </InputSectionContainer>
  );
};

export default InputSection;
