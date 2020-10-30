import React from 'react';
import FilterContainer from './style.js';

const Filter = () => {
  return (
    <FilterContainer>
      <details>
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
        <input type='text' placeholder='Search all issues' />
      </div>
    </FilterContainer>
  );
};

export default Filter;
