import React from 'react';
import { IssueDetailContentContainer } from './style';
import { useSelector } from '@hooks/react-context';

const IssueDetailContent = () => {
  const selectedIssue = useSelector(state => state.selectedIssue);
  const { id, openAt, title, description, JoinUser } = selectedIssue;

  return (
    <IssueDetailContentContainer>
      <div className='user_profile'>
        <img
          src={JoinUser?.User?.profileImage}
          alt='유저 이미지'
          width={100}
          height={100}
        />
      </div>
      <section className='detail_content'>
        <div className='detail_content_header'>
          <div className='detail_content_header_left'>
            <div>{title}</div>
            <div>{openAt}</div>
          </div>
          <div className='detail_content_header_right'>
            {JoinUser?.User.id && (
              <>
                <div>Owner</div>
                <div>Edit</div>
              </>
            )}
          </div>
        </div>
        <div className='detail_content_description'>{description}</div>
      </section>
    </IssueDetailContentContainer>
  );
};

export default IssueDetailContent;
