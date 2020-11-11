import React from 'react';
import { useSelector } from '@hooks/react-context';
import { IssueDetailHeaderContainer } from './style';

const IssueDetailHeader = () => {
  const selectedIssue = useSelector(state => state.selectedIssue);
  const { id, openAt, status, title, JoinUser } = selectedIssue;

  return (
    <IssueDetailHeaderContainer>
      <div className='issue_detail_header'>
        <section className='issue_detail_header_top'>
          <h1>
            {title} <span>#{id}</span>
          </h1>
          <button>edit</button>
        </section>
        <section className='issue_detail_header_bottom'>
          {status ? <div>open</div> : <div>close</div>}
          <div>{JoinUser?.User.username}</div>
          <div>opened this issue {openAt}</div>
        </section>
      </div>
    </IssueDetailHeaderContainer>
  );
};

export default IssueDetailHeader;
