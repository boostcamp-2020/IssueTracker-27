import React, { useContext, createContext, useReducer } from 'react';
import { createAction } from './utils';

const JoinUserStateContext = createContext(null);
const JoinUserDispatchContext = createContext(null);

const LOAD_JOIN_USERS = 'LOAD_JOIN_USERS';
const ADD_JOIN_USER = 'ADD_JOIN_USER';
const REMOVE_JOIN_USER = 'REMOVE_JOIN_USER';
const UPDATE_JOIN_USER = 'UPDATE_JOIN_USER';

export const loadJoinUsersAction = createAction(LOAD_JOIN_USERS);
export const addJoinUserAction = createAction(ADD_JOIN_USER);
export const removeJoinUserAction = createAction(REMOVE_JOIN_USER);
export const updateJoinUserAction = createAction(UPDATE_JOIN_USER);

const joinUserReducer = (joinUsers, action) => {
  switch (action.type) {
    case LOAD_JOIN_USERS:
      return [...action.payload];
    case ADD_JOIN_USER:
      return joinUsers.concat(action.payload);
    case REMOVE_JOIN_USER:
      return joinUsers.filter(
        joinUser => joinUser.User.id !== action.payload.id
      );
    case UPDATE_JOIN_USER:
      return joinUsers.map(joinUser =>
        joinUser.User.id === action.payload.id ? action.payload : joinUser
      );
    default:
      throw new Error('Unhandled action');
  }
};

const JoinUserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(joinUserReducer, []);

  return (
    <JoinUserDispatchContext.Provider value={dispatch}>
      <JoinUserStateContext.Provider value={state}>
        {children}
      </JoinUserStateContext.Provider>
    </JoinUserDispatchContext.Provider>
  );
};

export const useJoinUserState = () => {
  const state = useContext(JoinUserStateContext);
  if (!state) throw new Error('ContextProvider not found');
  return state;
};

export const useJoinUserDispatch = () => {
  const dispatch = useContext(JoinUserDispatchContext);
  if (!dispatch) throw new Error('ContextProvider not found');
  return dispatch;
};

export default JoinUserContextProvider;
