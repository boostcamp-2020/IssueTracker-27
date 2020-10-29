import React from 'react';
import styled from '@emotion/styled';

export const Button = styled.button`
  height: 2rem;
  width: ${props => props.width};
  background-color: ${props => props.backgroundColor};
  color: ${(props) => (props.color)};
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
`; 

export const GreenButton = ({children, width}) => {
  return(<Button backgroundColor='#2C974B' color='#ffffff' width={width}>{children}</Button>);
}

export const TagButton = ({children, width}) => {
  return(<Button backgroundColor='#ffffff' color='#000000' width={width}>{children}</Button>);
}
