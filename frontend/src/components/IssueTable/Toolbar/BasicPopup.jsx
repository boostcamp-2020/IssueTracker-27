import React from 'react';
import styled from '@emotion/styled';

const PopupHeader = styled.section`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  padding: 0 0.5rem;
`;
const PopupBody = styled.section`
  padding: 0 0.5rem;
`;
const BasicPopup = ({ title, placeholder, children }) => {
  return (
    <>
      <PopupHeader>
        <span>Filter by {title}</span>
        <span>
          <i className='fas fa-times'></i>
        </span>
      </PopupHeader>
      <PopupBody>
        <input placeholder={placeholder}></input>
        {children}
      </PopupBody>
    </>
  );
};

export default BasicPopup;
