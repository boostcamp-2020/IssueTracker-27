import { useMyInfoState } from '@contexts';

const useMyInfo = () => {
  const myInfo = useMyInfoState();
  return myInfo;
};

export default useMyInfo;
