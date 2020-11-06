import React from 'react';
import styled from '@emotion/styled';
import LoginForm from '@components/LoginForm';

const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
  height: 100vh;

  & form {
    width: 30%;
    min-width: 350px;
    height: 40%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: #ffffff;

    & label {
      width: 100%;
      display: block;
    }

    & input {
      width: 100%;
      min-width: 330px;
      height: 2rem;
    }
  }
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
