import React, { useEffect } from 'react';
import { axios } from '../api';

const Main = () => {
  const checkAuthGithub = async () => {
    try {
      const response = await axios.get('/auth/login/success', {
        withCredentials: true,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true
        }
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    checkAuthGithub();
  }, []);

  return <div>메인입니다.</div>;
};

export default Main;
