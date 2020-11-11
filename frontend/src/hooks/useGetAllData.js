import {
  useIssueDispatch,
  useLabelDispatch,
  useMilestoneDispatch,
  useJoinUserDispatch,
  loadIssuesAction,
  loadJoinUsersAction,
  loadLabelsAction,
  loadMilestoneAction
} from '@contexts';
import { axios } from '@api';
import { useEffect } from 'react';

const useGetAllData = () => {
  const issueDispatch = useIssueDispatch();
  const labelDispatch = useLabelDispatch();
  const milestoneissueDispatch = useMilestoneDispatch();
  const joinUserDispatch = useJoinUserDispatch();

  const getAllData = async () => {
    try {
      const { data } = await axios.get('/api/allData?issueTrackerId=1');
      issueDispatch(loadIssuesAction(data.issues));
      labelDispatch(loadLabelsAction(data.labels));
      milestoneissueDispatch(loadMilestoneAction(data.milestones));
      joinUserDispatch(loadJoinUsersAction(data.joinUsers));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllData();
  }, []);
};

export default useGetAllData;
