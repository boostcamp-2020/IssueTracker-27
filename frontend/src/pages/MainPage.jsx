import React, { useEffect } from 'react';
import { axios } from '@api';
import IssueTable from '@components/IssueTable';
import Menu from '@components/Menu';
import {
  useMainDispatch,
  LOAD_MYINFO,
  LOAD_ALL_DATA
} from '../contexts/MainContext';

const MainPage = () => {
  const dispatch = useMainDispatch();

  const checkAuthGithub = async () => {
    try {
      const response = await axios.get('/api/auth/login/success');
      const user = response.data.user;
      const payload = {
        id: user.id,
        username: user.username,
        profileImage: user.profileImage,
        joinUserId: user.JoinUsers[0].id
      };
      dispatch({ type: LOAD_MYINFO, payload: payload });
    } catch (error) {
      console.log(error);
    }
  };

  const getAllData = async () => {
    try {
      const { data } = await axios.get('/api/allData?issueTrackerId=1');
      dispatch({ type: LOAD_ALL_DATA, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkAuthGithub();
    getAllData();
  }, []);

  return (
    <div>
      <Menu />
      <IssueTable />
    </div>
  );
};

export default MainPage;
