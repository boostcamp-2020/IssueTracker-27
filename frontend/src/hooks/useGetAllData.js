import {
  loadIssuesAction,
  loadJoinUsersAction,
  loadLabelsAction,
  loadMilestoneAction
} from '@contexts';
import { axios } from '@api';
import { useEffect } from 'react';
import { useDispatch } from './react-context';

const useGetAllData = () => {
  const issueDispatch = useDispatch(dispatch => dispatch.issue);
  const labelDispatch = useDispatch(dispatch => dispatch.label);
  const milestoneissueDispatch = useDispatch(dispatch => dispatch.milestone);
  const joinUserDispatch = useDispatch(dispatch => dispatch.joinUser);

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
