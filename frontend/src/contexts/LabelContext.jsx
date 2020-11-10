import React, { useContext, createContext, useReducer } from 'react';
import { createAction } from './utils';

const LabelStateContext = createContext(null);
const LabelDispatchContext = createContext(null);

const LOAD_LABELS = 'LOAD_LABELS';
const ADD_LABEL = 'ADD_LABEL';
const REMOVE_LABEL = 'REMOVE_LABEL';
const UPDATE_LABEL = 'UPDATE_LABEL';

export const loadLabelsAction = createAction(LOAD_LABELS);
export const addLabelAction = createAction(ADD_LABEL);
export const removeLabelAction = createAction(REMOVE_LABEL);
export const updateLabelAction = createAction(UPDATE_LABEL);

const labelReducer = (labels, action) => {
  switch (action.type) {
    case LOAD_LABELS:
      return [...action.payload];
    case ADD_LABEL:
      return labels.concat(action.payload);
    case REMOVE_LABEL:
      return labels.filter(label => label.id !== action.payload.id);
    case UPDATE_LABEL:
      return labels.map(label =>
        label.id === action.payload.id ? action.payload : label
      );
    default:
      throw new Error('Unhandled action');
  }
};

const LabelContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(labelReducer, []);

  return (
    <LabelDispatchContext.Provider value={dispatch}>
      <LabelStateContext.Provider value={state}>
        {children}
      </LabelStateContext.Provider>
    </LabelDispatchContext.Provider>
  );
};

export const useLabelState = () => {
  const state = useContext(LabelStateContext);
  if (!state) throw new Error('ContextProvider not found');
  return state;
};

export const useLabelDispatch = () => {
  const dispatch = useContext(LabelDispatchContext);
  if (!dispatch) throw new Error('ContextProvider not found');
  return dispatch;
};

export default LabelContextProvider;
