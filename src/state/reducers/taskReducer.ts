import { ActionTypes } from "../action-types/crud";
import { Action } from "../action";

import { tasks } from "../types/context";

const taskReducer = (state: tasks[] = [], action: Action<tasks>): tasks[] => {
  switch (action.type) {
    case ActionTypes.CREATE:
      return [...state, action.payload];
    case ActionTypes.REMOVE:
      return state.filter(s => s.id !== action.payload);
    case ActionTypes.UPDATE:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default taskReducer;
