import { useState, useEffect } from 'react';
import useToggle from '@hooks/useToggle';

const useCheckState = filteredIssues => {
  const [isCheckAll, toggleIsCheckAll] = useToggle(false);
  const [checkState, setCheckState] = useState({});

  useEffect(() => {
    setCheckState(
      filteredIssues.reduce((total, issue) => {
        total[issue.id] = false;
        return total;
      }, {})
    );
  }, [filteredIssues]);

  useEffect(() => {
    setCheckState(
      Object.keys(checkState).reduce((total, key) => {
        total[key] = isCheckAll;
        return total;
      }, {})
    );
  }, [isCheckAll]);

  return [isCheckAll, toggleIsCheckAll, checkState, setCheckState];
};

export default useCheckState;
