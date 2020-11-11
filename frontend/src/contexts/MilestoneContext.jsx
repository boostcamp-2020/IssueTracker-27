import React, { useContext, createContext, useReducer } from 'react';
import { createAction } from './utils';

const MilestoneStateContext = createContext(null);
const MilestoneDispatchContext = createContext(null);

const ADD_MILESTONE = 'ADD_MILESTONE';
const LOAD_MILESTONES = 'LOAD_MILESTONES';
const REMOVE_MILESTONE = 'REMOVE_MILESTONE';
const UPDATE_MILESTONE = 'UPDATE_MILESTONE';

export const loadMilestoneAction = createAction(LOAD_MILESTONES);
export const addMilestoneAction = createAction(ADD_MILESTONE);
export const removeMilestoneAction = createAction(REMOVE_MILESTONE);
export const updateMilestoneAction = createAction(UPDATE_MILESTONE);

const milestoneReducer = (milestones, action) => {
  switch (action.type) {
    case ADD_MILESTONE:
      return milestones.concat(action.payload);
    case LOAD_MILESTONES:
      return [...action.payload];
    case REMOVE_MILESTONE:
      return milestones.filter(milestone => milestone.id !== actione.paylod.id);
    case UPDATE_MILESTONE:
      return milestones.reduce((total, milestone) => {
        if (milestone.id === action.id) return total.push(action.paylod);
        return total.push(milestone);
      }, []);
    default:
      throw new Error('Unhandled action');
  }
};

const MilestoneContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(milestoneReducer, []);

  return (
    <MilestoneDispatchContext.Provider value={dispatch}>
      <MilestoneStateContext.Provider value={state}>
        {children}
      </MilestoneStateContext.Provider>
    </MilestoneDispatchContext.Provider>
  );
};

export const useMilestoneState = () => {
  const state = useContext(MilestoneStateContext);
  if (!state) throw new Error('ContextProvider not found');
  return state;
};

export const useMilestoneDispatch = () => {
  const dispatch = useContext(MilestoneDispatchContext);
  if (!dispatch) throw new Error('ContextProvider not found');
  return dispatch;
};

export default MilestoneContextProvider;
