import React from 'react';
import useInputChange from '../hooks/useInputChange';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../api';

const LoginForm = () => {
  const [id, changeId] = useInputChange('');
  const [password, changePassword] = useInputChange('');

  const clickGithubLogin = () => {
    window.open(`${BASE_URL}/auth/login/github`, '_self');
  };

  return (
    <form>
      <label htmlFor='user_id'>아이디</label>
      <input id='user_id' value={id} onChange={changeId} />
      <label htmlFor='user_password'>비밀번호</label>
      <input id='user_password' value={password} onChange={changePassword} />
      <div>
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
        Sign in with GitHub
      </button>
    </form>
  );
};

export default LoginForm;
