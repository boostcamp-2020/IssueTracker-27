import React, { useContext, createContext, useReducer } from 'react';
import { createAction } from './utils';

const FilterBaseStateContext = createContext(null);
const FilterBaseDispatchContext = createContext(null);

const RESET_FILTER = 'RESET_FILTER';
const CHANGE_SOME_KEY = 'CHANGE_SOME_KEY';
const ADD_SOME_KEY = 'ADD_SOME_KEY';
const REMOVE_SOME_KEY = 'REMOVE_SOME_KEY';

export const resetFilterAction = createAction(RESET_FILTER);
export const changeSomeKeyAction = createAction(CHANGE_SOME_KEY);
export const addSomeKeyAction = createAction(ADD_SOME_KEY);
export const removeSomeKeyAction = createAction(REMOVE_SOME_KEY);

const filterBaseReducer = (filters, action) => {
  switch (action.type) {
    case RESET_FILTER:
      return {
        isOpen: true,
        labels: [],
        author: '',
        milestone: '',
        assignee: ''
      };

    case CHANGE_SOME_KEY:
      return { ...filters, [action.payload.key]: action.payload.value };

    case ADD_SOME_KEY:
      return {
        ...filters,
        [action.payload.key]: filters[action.payload.key].concat(
          action.payload.value
        )
      };

    case REMOVE_SOME_KEY:
      return {
        ...filters,
        [action.payload.key]: filters[action.payload.key].filter(
          some => some.id !== action.payload.value.id
        )
      };
    default:
      throw new Error('Unhandled action');
  }
};

const FilterBaseContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterBaseReducer, {
    isOpen: true,
    labels: [],
    author: {},
    milestone: {},
    assignee: {}
  });

  return (
    <FilterBaseDispatchContext.Provider value={dispatch}>
      <FilterBaseStateContext.Provider value={state}>
        {children}
      </FilterBaseStateContext.Provider>
    </FilterBaseDispatchContext.Provider>
  );
};

export const useFilterBaseState = () => {
  const state = useContext(FilterBaseStateContext);
  if (!state) throw new Error('ContextProvider not found');
  return state;
};

export const useFilterBaseDispatch = () => {
  const dispatch = useContext(FilterBaseDispatchContext);
  if (!dispatch) throw new Error('ContextProvider not found');
  return dispatch;
};

export default FilterBaseContextProvider;
