import React, { useState, useRef, useEffect } from 'react';
import useToggle from '@hooks/useToggle';
import styled from '@emotion/styled';

const SideBoxWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem 0rem;
  border-bottom: 1px solid lightgrey;
`;

const SideBox = ({ children }) => {
  return <SideBoxWrapper>{children}</SideBoxWrapper>;
};

const DropDownWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 3rem;
  left: 0;
  border: 1px solid lightgrey;
  border-radius: 5px;
  z-index: 1;
`;

const DropDownBox = ({ showToggle, children }) => {
  const dropDownRef = useRef();

  const closeDropDown = e => {
    if (
      dropDownRef.current &&
      e.target.closest('div') !== dropDownRef.current
    ) {
      showToggle(prev => !prev);
    }
  };

  useEffect(() => {
    window.addEventListener('click', closeDropDown);
  }, [dropDownRef]);

  return <DropDownWrapper ref={dropDownRef}>{children}</DropDownWrapper>;
};

const SideBoxContainer = ({ FirstChild, SecondChild }) => {
  const [isShow, showToggle] = useToggle(false);

  return (
    <SideBox>
      {FirstChild(showToggle)}
      {isShow && (
        <DropDownBox showToggle={showToggle}>{SecondChild}</DropDownBox>
      )}
    </SideBox>
  );
};

export default SideBoxContainer;
