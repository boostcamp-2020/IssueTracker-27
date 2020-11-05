import { useEffect, useState, useCallback, useRef } from 'react';

const debounce = (func, time = 500) => {
  let timer = null;
  return (...parameters) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func(...parameters);
      timer = null;
    }, time);

    return timer;
  };
};

const useDebouncer = ({ description, showTextLength, setShowTextLength }) => {
  const mounted = useRef(false);
  const isCleanedUp = useRef(false);

  let debouncer = useRef(
    debounce(() => {
      setShowTextLength(true);
      setTimeout(() => {
        if (isCleanedUp.current) {
          setShowTextLength(false);
        }
      }, 2000);
    }, 2000)
  ).current;

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (showTextLength) setShowTextLength(false);
    isCleanedUp.current = true;
    let timer = debouncer();
    return () => {
      clearTimeout(timer);
      isCleanedUp.current = false;
    };
  }, [description]);
};

export default useDebouncer;
