import React, { useEffect, useRef } from 'react';
import { useSelector } from '@hooks/react-context';
import useInputChange from '@hooks/useInputChange';
import FilterContainer from './style';
import FilterList from './FilterList';

const baseMap = {
  isOpen: value => (value ? 'is:open' : value === false ? 'is:close' : ''),
  labels: labels =>
    labels.length ? labels.map(label => `label:${label.title}`).join(' ') : '',
  author: author =>
    author.id ? `author:${author.username || author.User.username}` : '',
  milestone: milestone => (milestone.id ? `milestone:${milestone.title}` : ''),
  assignee: assignee =>
    assignee.id ? `assignee:${assignee.username || assignee.User.username}` : ''
};

const Filter = () => {
  const [value, changeValue, setValue] = useInputChange('');
  const filterBase = useSelector(state => state.filterBase);
  const detailRef = useRef(undefined);

  const closeDetail = e => {
    if (
      detailRef.current &&
      e.target.closest('details') !== detailRef.current
    ) {
      detailRef.current.open = false;
    }
  };

  useEffect(() => {
    const valueString = Object.keys(filterBase).reduce((total, base) => {
      const stringByBase = baseMap[base](filterBase[base]);
      return `${total}${stringByBase ? ` ${stringByBase}` : ''}`;
    }, '');
    setValue(valueString);
  }, [filterBase]);

  useEffect(() => {
    window.addEventListener('click', closeDetail);
    return () => {
      window.removeEventListener('click', closeDetail);
    };
  }, [detailRef]);

  return (
    <FilterContainer>
      <details ref={detailRef}>
        <summary>
          {' '}
          Filters
          <i className='fas fa-angle-down'></i>
        </summary>
        <FilterList />
      </details>

      <div className='filter_input_wrap'>
        <i className='fas fa-search'></i>
        <input
          type='text'
          placeholder='Search all issues'
          value={value}
          onChange={changeValue}
        />
      </div>
    </FilterContainer>
  );
};

export default Filter;
