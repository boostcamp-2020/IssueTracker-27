import React from 'react';
import styled from '@emotion/styled';
import LoginForm from '@components/LoginForm';

const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  & img {
    width: 12rem;
    height: 12rem;
    border-radius: 50%;

    @media screen and (max-width: 580px) {
      width: 8rem;
      height: 8rem;
    }
  }
`;

const LoginPage = () => {
  return (
    <LoginSection>
      <img src='https://ifh.cc/g/Qc1Ds0.png' alt='로고'></img>
      <LoginForm />
    </LoginSection>
  );
};

export default LoginPage;
