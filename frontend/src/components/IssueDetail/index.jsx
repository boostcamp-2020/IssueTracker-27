import React, { useState, useEffect } from 'react';
import { useSelector } from '@hooks/react-context';
import AsideMenu from '@components/AsideMenu';
import IssueDetailHeader from './IssueDetailHeader';
import IssueDetailMain from './IssueDetailMain';
import Comment from './Comment';
import { IssueDetailContainer } from './style';

const IssueDetail = () => {
  const selectedIssue = useSelector(state => state.selectedIssue);
  const { Assignees, IssueLabels, Milestone } = selectedIssue;

  const [additionalInfo, setAdditionalInfo] = useState({
    assignees: Assignees,
    labels: IssueLabels,
    milestone: Milestone
  });

  useEffect(() => {
    setAdditionalInfo({
      assignees: Assignees,
      labels: IssueLabels?.length && IssueLabels.map(label => label.Label),
      milestone: Milestone
    });
  }, [selectedIssue]);

  return (
    <IssueDetailContainer>
      <IssueDetailHeader />
      <main>
        <div className='main_content'>
          <IssueDetailMain />
        </div>
        <AsideMenu
          additionalInfo={additionalInfo}
          setAdditionalInfo={setAdditionalInfo}
        />
      </main>
      <Comment />
    </IssueDetailContainer>
  );
};

export default IssueDetail;
