import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const DetailBoxContainer = styled.details`
  position: relative;
  & summary::-webkit-details-marker {
    display: none;
  }
`;

const PopupContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 0;
  padding: 0.5rem 0;
  background: white;
  border: 1px solid grey;
  border-radius: 5px;
`;

export const DetailsBox = ({ title, children }) => {
  const detailRef = useRef();
  const closeDetails = e => {
    if (
      detailRef.current &&
      e.target.closest('details') !== detailRef.current
    ) {
      detailRef.current.open = false;
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeDetails);
  }, [detailRef]);

  return (
    <DetailBoxContainer ref={detailRef}>
      <summary>
        {title}
        <i className='fas fa-angle-down'></i>
      </summary>
      <PopupContainer>{children}</PopupContainer>
    </DetailBoxContainer>
  );
};
