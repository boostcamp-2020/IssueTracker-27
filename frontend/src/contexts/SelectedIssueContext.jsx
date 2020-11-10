import React, { useContext, createContext, useReducer } from 'react';
import { createAction } from './utils';

const SelectedIssueStateContext = createContext(null);
const SelectedIssueDispatchContext = createContext(null);

const LOAD_SELECTEDISSUES = 'LOAD_SELECTEDISSUES';
const ADD_SELECTEDISSUE = 'ADD_SELECTEDISSUE';

export const loadSelectedIssuesAction = createAction(LOAD_SELECTEDISSUES);
export const addSelectedIssuesAction = createAction(ADD_SELECTEDISSUE);

const SelectedIssueReducer = (selectedIssue, action) => {
  switch (action.type) {
    case LOAD_SELECTEDISSUES:
      return { ...action.payload };
    default:
      throw new Error('Unhandled action');
  }
};

const SelectedIssueContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SelectedIssueReducer, {});

  return (
    <SelectedIssueDispatchContext.Provider value={dispatch}>
      <SelectedIssueStateContext.Provider value={state}>
        {children}
      </SelectedIssueStateContext.Provider>
    </SelectedIssueDispatchContext.Provider>
  );
};

export const useSelectedIssueState = () => {
  const state = useContext(SelectedIssueStateContext);
  if (!state) throw new Error('ContextProvider not found');
  return state;
};

export const useSelectedIssueDispatch = () => {
  const dispatch = useContext(SelectedIssueDispatchContext);
  if (!dispatch) throw new Error('ContextProvider not found');
  return dispatch;
};

export default SelectedIssueContextProvider;
