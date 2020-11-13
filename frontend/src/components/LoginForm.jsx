import React from 'react';
import useInputChange from '@hooks/useInputChange';
import { Link } from 'react-router-dom';
import { BASE_URL } from '@api';

import styled from '@emotion/styled';

const FormContainer = styled.form`
  width: 50%;
  min-width: 350px;
  height: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 1.5rem;
  border: 1px solid #e1e5e8;
  background-color: #ffffff;

  & label {
    width: 100%;
    display: block;
    font-weight: bold;
    margin-top: 0.5rem;
  }

  & input {
    width: 100%;
    height: 2rem;
    padding: 1rem 0.5rem;
    border: 1px solid #e1e5e8;
  }

  & .local_button_wrapper {
    display: flex;
    justify-content: space-around;
    margin-top: auto;
    & button {
      border: none;
      color: #72a3e7;
      background: none;
      cursor: pointer;
      & a {
        color: #72a3e7;
        text-decoration: none;
      }
    }
  }

  & .github_button {
    margin-top: auto;
    border: 1px solid #24292e;
    border-radius: 5px;
    padding: 1rem 1.5rem;
    background-size: 250%;
    background-image: linear-gradient(to left, #a0a0a0, #24292e);
    color: white;
    padding-left: 1rem;
    position: relative;
    transition: all 0.5s linear;
    cursor: pointer;
    &:hover {
      background-position: right;
    }
  }
`;

const LoginForm = () => {
  const [id, changeId] = useInputChange('');
  const [password, changePassword] = useInputChange('');

  const clickGithubLogin = () => {
    window.open(`${BASE_URL}/api/auth/login/github`, '_self');
  };

  return (
    <FormContainer>
      <label htmlFor='user_id'>아이디</label>
      <input
        id='user_id'
        value={id}
        onChange={changeId}
        minLength={6}
        maxLength={16}
      />
      <label htmlFor='user_password'>비밀번호</label>
      <input
        id='user_password'
        type='password'
        value={password}
        onChange={changePassword}
        minLength={6}
        maxLength={12}
      />
      <div className='local_button_wrapper'>
        <button type='submit'>로그인</button>
        <button type='button'>
          <Link to='/signup'>회원가입</Link>
        </button>
      </div>
      <button
        type='button'
        className='github_button'
        onClick={clickGithubLogin}
      >
        Sign in with GitHub{' '}
        <span>
          <i className='fab fa-github'></i>
        </span>
      </button>
    </FormContainer>
  );
};

export default LoginForm;
