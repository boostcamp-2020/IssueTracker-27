import React from 'react';
import { Link } from 'react-router-dom';
import { IssueItem } from './style';
import Labels from './Labels';
import Milestone from './Milestone';
import Title from './Title';
import Icon from './Icon';
import Opened from './Opened';

const Issue = ({ issue, checkState, setCheckState }) => {
  /**
   * id
   * description,
   * openAt,
   * status
   *
   * issue.Assignees[i].id : 담당자 id
   * issue.Assignees[i].JoinUser.id : issueTracker에 등록한 사용자의 id
   * issue.Assignees[i].JoinUser.User.id : 사용자 id
   * issue.Assignees[i].JoinUser.User.username : 사용자 닉네임
   * issue.Assignees[i].JoinUser.User.profileImage : 사용자 프로필 사진
   *
   * issue.Milestone.title : 마일스톤 제목
   * issue.Milestone.id : 마일스톤 id
   *
   * issue.Labels[i].id : label id
   * issue.Labels[i].title: label 제목
   *
   * issue.status: issue open/close
   * issue.openAt: issue 오픈날
   */

  const onChange = () => {
    setCheckState(prev => ({ ...prev, [issue.id]: !prev[issue.id] }));
  };

  return (
    <IssueItem>
      <input
        type='checkbox'
        checked={checkState || false}
        onChange={onChange}
      />
      <Icon status={issue.status} />
      <Link to={`/issue/${issue.id}`}>
        <div className='issue_content'>
          <div>
            <Title title={issue.title} />
            <Labels issueLabels={issue.IssueLabels} />
          </div>
          <div>
            <Opened
              openAt={issue.openAt}
              username={issue.JoinUser.User.username}
            />
            {issue.Milestone && <Milestone milestone={issue.Milestone} />}
          </div>
        </div>
      </Link>
      {/* 뒤에 추가 적인 내용 */}
    </IssueItem>
  );
};

export default Issue;
