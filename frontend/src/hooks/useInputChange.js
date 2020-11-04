import { useState } from 'react';

const useInputChange = (initialValue = null) => {
  const [value, setValue] = useState(initialValue);

  const handler = event => {
    setValue(event.target.value);
  };

  return [value, handler, setValue];
};

export default useInputChange;
