import React from 'react';
import { Link } from 'react-router-dom';
import { IssueItem } from './style';
import Labels from './Labels';
import Milestone from './Milestone';
import Title from './Title';
import Icon from './Icon';
import Opened from './Opened';

const Issue = React.memo(({ issue, checkState, setCheckState }) => {
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
});

export default Issue;
