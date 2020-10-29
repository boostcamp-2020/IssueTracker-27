import React from 'react';
import styled from '@emotion/styled';

const FilterContainer = styled.div`
  height: 50px;
  width: 250px;
  
  .filter-button{
    width: 50px;
    height: 50px;
    font-weight: bold;
  }

  .filter-search{
    width: 200px;
    height: 50px;
  }
`;

const Filter = () => {
    return (
        <FilterContainer>
            <button className="filter-button">Filters</button>
            <input className="filter-search" placeholder="Search all issues"/>
        </FilterContainer>
    );
};

export default Filter;
