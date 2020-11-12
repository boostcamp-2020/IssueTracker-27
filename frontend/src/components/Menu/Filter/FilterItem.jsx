import React from 'react';

const FilterItem = ({ title, onClick }) => {
  return (
    <li className='filter_item' onClick={onClick}>
      {title}
    </li>
  );
};

export default FilterItem;
