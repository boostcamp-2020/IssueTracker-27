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
`;

const LoginPage = () => {
  return (
    <LoginSection>
      <h1>이슈 트래커</h1>
      <LoginForm />
    </LoginSection>
  );
};

export default LoginPage;
