import React from 'react';
import styled from '@emotion/styled';

export const Button = styled.button`
  height: ${props => props.height || '2.5rem'};
  width: ${props => props.width};
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  border-radius: 5px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.1rem;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const GreenButton = ({ children, width, ...rest }) => {
  return (
    <Button backgroundColor='#2C974B' color='#ffffff' width={width} {...rest}>
      {children}
    </Button>
  );
};

export const RedButton = ({ children, width, ...rest }) => {
  return (
    <Button backgroundColor='#ffffff' color='#c31f1f' width={width} {...rest}>
      {children}
    </Button>
  );
};

export const TagButton = ({ children, width }) => {
  return (
    <Button backgroundColor='#ffffff' color='#000000' width={width}>
      {children}
    </Button>
  );
};
