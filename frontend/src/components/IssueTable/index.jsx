import React, { useEffect, useMemo } from 'react';
import styled from '@emotion/styled';
import Toolbar from './Toolbar';
import IssueList from './IssueList';
import IssueTableContainer from './style';
import useFilteredIssues from '@hooks/useFilteredIssues';
import useCheckState from '@hooks/useCheckState';

const IssueTable = () => {
  const filteredIssues = useFilteredIssues();
  const [
    isCheckAll,
    toggleIsCheckAll,
    checkState,
    setCheckState
  ] = useCheckState(filteredIssues);

  const checkedNumber = useMemo(
    () =>
      Object.keys(checkState).reduce(
        (total, id) => total + (checkState[id] ? 1 : 0),
        0
      ),
    [checkState]
  );

  return (
    <IssueTableContainer>
      <Toolbar
        isCheckAll={isCheckAll}
        toggleIsCheckAll={toggleIsCheckAll}
        checkedNumber={checkedNumber}
      />
      <IssueList
        checkState={checkState}
        setCheckState={setCheckState}
        filteredIssues={filteredIssues}
      />
    </IssueTableContainer>
  );
};

export default IssueTable;
