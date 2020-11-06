import { useState, useCallback } from 'react';

const useToggle = initialValue => {
  const [value, setValue] = useState(initialValue);

  const onToggle = useCallback(() => {
    setValue(value => !value);
  }, []);

  return [value, onToggle, setValue];
};

export default useToggle;
