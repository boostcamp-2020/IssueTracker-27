import React from 'react';
import {IssueItem} from './style';

const Issue = ({issue}) => {
  console.log(issue);
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

  return (
    <IssueItem>
      {issue.title} | {issue.id} | {issue.JoinUser.User.username} | 
    </IssueItem>
  );
};

export default Issue;