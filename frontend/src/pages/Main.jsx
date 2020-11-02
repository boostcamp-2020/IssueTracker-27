import React, { useEffect, useState } from 'react';
import { axios } from '../api';
import IssueTable from '../components/IssueTable';
import Menu from '../components/Menu';
import {
  useMainDispatch,
  LOAD_MYINFO,
  LOAD_ISSUE
} from '../contexts/MainContext';

const Main = () => {
  const dispatch = useMainDispatch();

  const checkAuthGithub = async () => {
    try {
      const response = await axios.get('/api/auth/login/success');
      dispatch({ type: LOAD_MYINFO, payload: response.data.user });
    } catch (error) {
      console.log(error);
    }
  };

  const getIssues = async () => {
    try {
      const response = await axios.get('/api/issues?issueTrackerId=1');
      dispatch({ type: LOAD_ISSUE, payload: response.data.issues });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkAuthGithub();
    getIssues();
  }, []);

  return (
    <div>
      <Menu />
      <IssueTable />
    </div>
  );
};

export default Main;
