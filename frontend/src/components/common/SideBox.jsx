import React, { useState } from 'react';
import styled from '@emotion/styled';

const SideBoxWrapper = styled.div`
  position: relative;
  background-color: lightblue;
  border: 1px solid lightgrey;
  height: 8vh;
  width: 10%;
`;

const SideBox = ({ children }) => {
  return <SideBoxWrapper>{children}</SideBoxWrapper>;
};

const DropDownWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
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
      <FirstChild onClick={toggleIsShow}></FirstChild>
      {isShow && (
        <DropDownBox>
          <SecondChild></SecondChild>
        </DropDownBox>
      )}
    </SideBox>
  );
};

export default SideBoxContainer;
