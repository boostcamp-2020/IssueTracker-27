import { useEffect } from 'react';
import { axios } from '@api';
import { loadMyInfoAction } from '@contexts';
import { useDispatch, useSelector } from './react-context';
import { useHistory, useLocation } from 'react-router-dom';

const useCheckAuth = () => {
  const history = useHistory();
  const location = useLocation();

  const myInfo = useSelector(state => state.myInfo);
  const myInfoDispatch = useDispatch(dispatch => dispatch.myInfo);

  const checkAuth = async () => {
    if (myInfo.id) return;

    try {
      const response = await axios.get('/api/auth/login/success');
      const user = response.data.user;
      const payload = {
        id: user.id,
        username: user.username,
        profileImage: user.profileImage,
        joinUserId: user?.JoinUsers?.length && user.JoinUsers[0].id
      };

      myInfoDispatch(loadMyInfoAction(payload));
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
