import { useMainState } from '@contexts/MainContext';
import { useMemo } from 'react';

const useFilteredIssues = () => {
  const { issues, filterBase } = useMainState();
  const filteredIssues = useMemo(
    () =>
      issues.filter(issue => {
        if (
          typeof filterBase.isOpen === 'boolean' &&
          issue.status !== filterBase.isOpen
        ) {
          return false;
        }
        if (
          filterBase.labels.length &&
          !issue.IssueLabels.every(target =>
            filterBase.labels.some(label => target.Label.id === label.id)
          )
        ) {
          return false;
        }
        if (filterBase.author.id && issue.JoinUser.id !== filterBase.author.id)
          return false;

        if (
          filterBase.milestone.id &&
          issue.Milestone.id !== filterBase.milestone.id
        )
          return false;

        if (
          filterBase.assignee.id &&
          !issue.Assignees.some(
            assignee => assignee.id === filterBase.assignee.id
          )
        )
          return false;

        return true;
      }),
    [issues]
  );

  return filteredIssues;
};

export default useFilteredIssues;
