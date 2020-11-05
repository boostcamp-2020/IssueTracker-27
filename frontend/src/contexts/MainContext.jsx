import React, { createContext, useReducer, useContext } from 'react';

const StateContext = createContext(null);
const DispatchContext = createContext(null);

export const LOAD_MYINFO = 'LOAD_MYINFO';
export const LOAD_ALL_DATA = 'LOAD_ALL_DATA';

export const RESET_FILTER = 'RESET_FILTER';

export const CHANGE_SOME_KEY = 'CHANGE_SOME_KEY';
export const ADD_SOME_KEY = 'ADD_SOME_KEY';
export const REMOVE_SOME_KEY = 'REMOVE_SOME_KEY';

const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_ALL_DATA:
      return { ...state, ...action.payload };

    case LOAD_MYINFO:
      return { ...state, myInfo: action.payload };

    case RESET_FILTER:
      return {
        ...state,
        filterBase: {
          isOpen: true,
          labels: [],
          author: '',
          milestone: '',
          assignee: ''
        }
      };

    case CHANGE_SOME_KEY:
      return {
        ...state,
        filterBase: {
          ...state.filterBase,
          [action.data.key]: action.data.value
        }
      };

    case ADD_SOME_KEY:
      return {
        ...state,
        filterBase: {
          ...state.filterBase,
          [action.data.key]: state.filterBase[action.data.key].concat(
            action.data.value
          )
        }
      };

    case REMOVE_SOME_KEY:
      return {
        ...state,
        filterBase: {
          ...state.filterBase,
          [action.data.key]: state.filterBase[action.data.key].filter(
            some => some.id !== action.data.value.id
          )
        }
      };
    default:
      throw new Error('Unhandled action');
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    myInfo: {},
    issues: [],
    labels: [],
    milestones: [],
    joinUsers: [],
    filterBase: {
      isOpen: true,
      labels: [],
      author: {},
      milestone: {},
      assignee: {}
    }
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
