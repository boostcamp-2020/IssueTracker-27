import React, { useState } from 'react';
import styled from '@emotion/styled';

const SideBoxWrapper = styled.div`
  position: relative;
  height: 6rem;
  width: 20rem;
  border-bottom: 1px solid lightgrey;
  padding: 1rem 0rem;
  margin-left: 2rem;
`;

const SideBox = ({ children }) => {
  return <SideBoxWrapper>{children}</SideBoxWrapper>;
};

const DropDownWrapper = styled.div`
  position: absolute;
  top: 3rem;
  left: 0;
  border: 1px solid lightgrey;
`;

const DropDownBox = ({ children }) => {
  return <DropDownWrapper>{children}</DropDownWrapper>;
};

const SideBoxContainer = ({ FirstChild, SecondChild }) => {
  const [isShow, setIsShow] = useState(false);

  const toggleIsShow = () => setIsShow(isShow => !isShow);

  return (
    <SideBox>
      {FirstChild(toggleIsShow)}
      {isShow && <DropDownBox>{SecondChild}</DropDownBox>}
    </SideBox>
  );
};

export default SideBoxContainer;
