import { useEffect } from 'react';
import { axios } from '@api';
import useMyInfo from '@hooks/useMyInfo';
import { useMainDispatch, LOAD_MYINFO } from '@contexts/MainContext';
import { useHistory, useLocation } from 'react-router-dom';

const useCheckAuth = () => {
  const dispatch = useMainDispatch();
  const history = useHistory();
  const location = useLocation();
  const pathsToCheck = ['/new-issue'];
  const myInfo = useMyInfo();

  const checkAuth = async () => {
    if (myInfo.id) return;
    if (!pathsToCheck.includes(location.pathname)) return;

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
      alert('로그인이 필요합니다!');
      history.push('/login');
    }
  };

  useEffect(() => {
    checkAuth();
  }, [location.pathname]);
};

export default useCheckAuth;
