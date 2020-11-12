import { useSelector } from './react-context';
import { useMemo } from 'react';

const useFilteredIssues = () => {
  const filterBase = useSelector(state => state.filterBase);
  const issues = useSelector(state => state.issue);

  const filteredIssues = useMemo(
    () =>
      issues.filter(issue => {
        if (
          typeof filterBase.isOpen === 'boolean' &&
          issue.status !== filterBase.isOpen
        )
          return false;

        if (
          filterBase.labels?.length &&
          !issue.IssueLabels.some(target =>
            filterBase.labels.some(label => target.Label?.id === label.id)
          )
        )
          return false;

        if (filterBase.author.id && issue.JoinUser.id !== filterBase.author.id)
          return false;

        if (
          filterBase.milestone?.id &&
          issue?.Milestone?.id !== filterBase.milestone.id
        )
          return false;

        if (
          filterBase.assignee?.id &&
          !issue.Assignees.some(
            assignee =>
              assignee.JoinUser?.User?.id === filterBase.assignee?.User?.id
          )
        )
          return false;

        return true;
      }),
    [issues, filterBase]
  );

  return filteredIssues;
};

export default useFilteredIssues;
