import React, { useContext, createContext, useReducer } from 'react';
import { createAction } from './utils';

const IssueStateContext = createContext(null);
const IssueDispatchContext = createContext(null);

const LOAD_ISSUES = 'LOAD_ISSUES';
const ADD_ISSUE = 'ADD_ISSUE';
const UPDATE_ISSUE = 'UPDATE_ISSUE';

export const loadIssuesAction = createAction(LOAD_ISSUES);
export const addIssueAction = createAction(ADD_ISSUE);
export const updateIssueAction = createAction(UPDATE_ISSUE);

const issueReducer = (issues, action) => {
  switch (action.type) {
    case LOAD_ISSUES:
      return [...action.payload];
    case ADD_ISSUE:
      return [...issues, action.payload];
    case UPDATE_ISSUE:
      return issues.map(issue =>
        issue.id === action.payload.id ? action.payload : issue
      );
    default:
      throw new Error('Unhandled action');
  }
};

const IssueContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(issueReducer, []);

  return (
    <IssueDispatchContext.Provider value={dispatch}>
      <IssueStateContext.Provider value={state}>
        {children}
      </IssueStateContext.Provider>
    </IssueDispatchContext.Provider>
  );
};

export const useIssueState = () => {
  const state = useContext(IssueStateContext);
  if (!state) throw new Error('ContextProvider not found');
  return state;
};

export const useIssueDispatch = () => {
  const dispatch = useContext(IssueDispatchContext);
  if (!dispatch) throw new Error('ContextProvider not found');
  return dispatch;
};

export default IssueContextProvider;
