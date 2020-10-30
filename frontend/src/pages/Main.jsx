import React, { useEffect, useState } from 'react';
import { axios } from '../api';
import IssueTable from '../components/IssueTable';
import Menu from '../components/Menu';

const Main = () => {
  const [myInfo, setMyInfo] = useState(null);
  const [issues, setIssues] = useState([]);

  const checkAuthGithub = async () => {
    try {
      const response = await axios.get('/auth/login/success');
      setMyInfo(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const getIssues = async () => {
    try {
      const response = await axios.get('/issues?issueTrackerId=1');
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
      {/* {myInfo && `안녕하세요. ${myInfo.username}님`}
      {issues.length ? <Issues issues={issues}/> : <div>이슈가 없습니다.</div>
      } */}
    </div>
  );
};

export default Main;
