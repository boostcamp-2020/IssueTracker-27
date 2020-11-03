import React, { useEffect, useRef } from 'react';
import { useMainState } from '../../../contexts/MainContext.jsx';
import useInputChange from '../../../hooks/useInputChange.js';
import FilterContainer from './style.js';

const baseMap = {
  isOpen: value => (value ? 'is:open' : value === false ? 'is:close' : ''),
  labels: labels =>
    labels.length ? labels.map(label => `label:${label.title}`).join(' ') : '',
  author: author => (author.id ? `author:${author.name}` : ''),
  milestone: milestone => (milestone.id ? `milestone:${milestone.title}` : ''),
  assignee: assignee => (assignee.id ? `assignee:${assignee.name}` : '')
};

const Filter = () => {
  const [value, changeValue, setValue] = useInputChange('');
  const { filterBase } = useMainState();
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
        <ul className='filter_list'>
          <li className='filter_item'>Filter Issues</li>
          <li className='filter_item'>Open issues</li>
          <li className='filter_item'>Your issues</li>
          <li className='filter_item'>Everything assigned to you</li>
          <li className='filter_item'>Everything mentioning you</li>
          <li className='filter_item'>Closed issues</li>
        </ul>
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
