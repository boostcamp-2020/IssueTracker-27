import React, { useState } from 'react';
import { useSelector } from '@hooks/react-context';
import AsideMenu from '@components/AsideMenu';
import IssueDetailHeader from './IssueDetailHeader';
import IssueDetailMain from '@components/IssueDetail/IssueDetailMain';
import { IssueDetailContainer } from './style';

const IssueDetail = () => {
  const selectedIssue = useSelector(state => state.selectedIssue);

  // const [additionalInfo, setAdditionalInfo] = useState({
  //   assignees: selectedIssue
  //   labels,
  //   milestone: null
  // });

  return (
    <IssueDetailContainer>
      <IssueDetailHeader />
      {/* <main>
        <div className='main_content'>
          <IssueDetailMain />
        </div>
        <AsideMenu />
      </main> */}
    </IssueDetailContainer>
  );
};

export default IssueDetail;
