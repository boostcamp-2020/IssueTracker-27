import styled from '@emotion/styled';

const Button = styled.button`
  height: 50px;
  width: 150px;
  background-color: ${props => props.tag ?  '#fffff' : '#2C974B'};
  color: ${props => props.tag ? '#000000' : '#ffffff'};
  border-radius: 5px;
  border: 1px solid ${props => props.tag ? '#c2c2c2' : '#173820'};
`; 

export default Button;