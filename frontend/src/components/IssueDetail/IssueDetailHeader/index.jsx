import React from 'react';
import { IssueDetailHeaderContainer } from './style';

const IssueDetailHeader = ({ issueId, title, status, userName, openAt }) => {
  return (
    <IssueDetailHeaderContainer>
      <div className='issue_detail_header'>
        <section className='issue_detail_header_top'>
          <h1>
            {title} <span>#{issueId}</span>
          </h1>
          <button>edit</button>
        </section>
        <section className='issue_detail_header_bottom'>
          {status ? <div>open</div> : <div>close</div>}
          <div>{userName}</div>
          <div>opened this issue {openAt}</div>
        </section>
      </div>
    </IssueDetailHeaderContainer>
  );
};

export default IssueDetailHeader;
