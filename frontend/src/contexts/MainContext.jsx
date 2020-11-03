import React, { createContext, useReducer, useContext } from 'react';

const StateContext = createContext(null);
const DispatchContext = createContext(null);

export const LOAD_MYINFO = 'LOAD_MYINFO';
export const LOAD_ALL_DATA = 'LOAD_ALL_DATA';

const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_ALL_DATA:
      return { ...state, ...action.payload };
    case LOAD_MYINFO:
      return { ...state, myInfo: action.payload };
    default:
      throw new Error('Unhandled action');
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    myInfo: {},
    issues: [],
    labels: [],
    milestones: []
  });

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useMainState = () => {
  const state = useContext(StateContext);
  if (!state) throw new Error('ContextProvider not found');
  return state;
};

export const useMainDispatch = () => {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) throw new Error('ContextProvider not found');
  return dispatch;
};
