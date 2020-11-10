import React, { useContext, createContext, useReducer } from 'react';
import { createAction } from './utils';

const MyInfoStateContext = createContext(null);
const MyInfoDispatchContext = createContext(null);

const LOAD_MYINFO = 'LOAD_MYINFO';

export const loadMyInfoAction = createAction(LOAD_MYINFO);

const myInfoReducer = (myInfos, action) => {
  switch (action.type) {
    case LOAD_MYINFO:
      return { ...action.payload };
    default:
      throw new Error('Unhandled action');
  }
};

const MyInfoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(myInfoReducer, {});
  return (
    <MyInfoDispatchContext.Provider value={dispatch}>
      <MyInfoStateContext.Provider value={state}>
        {children}
      </MyInfoStateContext.Provider>
    </MyInfoDispatchContext.Provider>
  );
};

export const useMyInfoState = () => {
  const state = useContext(MyInfoStateContext);
  if (!state) throw new Error('ContextProvider not found');
  return state;
};

export const useMyInfoDispatch = () => {
  const dispatch = useContext(MyInfoDispatchContext);
  if (!dispatch) throw new Error('ContextProvider not found');
  return dispatch;
};

export default MyInfoContextProvider;
