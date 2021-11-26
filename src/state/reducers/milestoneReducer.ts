import { ActionTypes } from "../action-types/crud";
import { Action } from "../action";

import { milestones } from "../types/context";

const taskReducer = (state: milestones[] = [], action: Action<milestones>): milestones[] => {
  switch (action.type) {
    case ActionTypes.CREATE:
      return [...state, action.payload];
    case ActionTypes.REMOVE:
      return state.filter(s => s.id !== action.payload);
    default:
      return state;
  }
};

export default taskReducer;