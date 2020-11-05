import { useMainState } from '@contexts/MainContext';

const useMyInfo = () => {
  const { myInfo } = useMainState();
  return myInfo;
};

export default useMyInfo;
