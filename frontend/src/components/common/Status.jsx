import styled from '@emotion/styled';

const StatusBox = styled.div`
  width: 20%;
  height: 2rem;
  background-color: ${props => props.background};
  border-radius: 5px;
`;

export const Open = ({ children }) => {
  return (
    <StatusBox backgroundColor='#2C974B' color='#ffffff'>
      {children}
    </StatusBox>
  );
};

export const Close = ({ children }) => {
  return (
    <StatusBox backgroundColor='#ffffff' color='#c31f1f'>
      {children}
    </StatusBox>
  );
};
