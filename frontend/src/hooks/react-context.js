import {
  useSelectedIssueState,
  useSelectedIssueDispatch,
  useFilterBaseState,
  useFilterBaseDispatch,
  useIssueState,
  useIssueDispatch,
  useJoinUserState,
  useJoinUserDispatch,
  useLabelState,
  useLabelDispatch,
  useMilestoneState,
  useMilestoneDispatch,
  useMyInfoState,
  useMyInfoDispatch
} from '../contexts';

const stateMap = {
  selectedIssue: useSelectedIssueState,
  filterBase: useFilterBaseState,
  issue: useIssueState,
  joinUser: useJoinUserState,
  label: useLabelState,
  milestone: useMilestoneState,
  myInfo: useMyInfoState
};

const dispatchMap = {
  selectedIssue: useSelectedIssueDispatch,
  filterBase: useFilterBaseDispatch,
  issue: useIssueDispatch,
  joinUser: useJoinUserDispatch,
  label: useLabelDispatch,
  milestone: useMilestoneDispatch,
  myInfo: useMyInfoDispatch
};

export const useSelector = callback => {
  return callback(stateMap)();
};

export const useDispatch = callback => {
  return callback(dispatchMap)();
};
