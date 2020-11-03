import React from 'react';
import styled from '@emotion/styled';

const FilterContainer = styled.div`
  display: flex;
  width: 70%;
  padding-left: 0.5rem;
  border: 1px solid #e1e4e8;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  align-items: center;

  & input {
    width: 100%;
    height: 100%;
    margin-left: 0.5rem;
    padding-left: 0.5rem;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: none;
    &:focus {
      outline: none;
    }
  }

  &:focus-within {
    box-shadow: 0 0 0 3px #88b8ff;
  }
`;

const Filter = ({ value, onChange, placeholder }) => {
  return (
    <FilterContainer>
      <input
        type='text'
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </FilterContainer>
  );
};

export default Filter;
