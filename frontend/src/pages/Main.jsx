import React, { useEffect, useState } from 'react';
import { axios } from '../api';
import IssueTable from '../components/IssueTable';
import Menu from '../components/Menu';

const Main = () => {
  const [myInfo, setMyInfo] = useState(null);
  const [issues, setIssues] = useState([]);

  const checkAuthGithub = async () => {
    try {
      const response = await axios.get('/api/auth/login/success');
      setMyInfo(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const getIssues = async () => {
    try {
      const response = await axios.get('/api/issues?issueTrackerId=1');
      setIssues(response.data.issues);
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
      <IssueTable issues={issues} />
    </div>
  );
};

export default Main;
