import { TasksTypes } from "../action-types/crud";

import { tasks } from "../types/context";
import { initialState } from "../initialState";
import { T_ActionTask } from "../action/T_TaskAction";

const taskReducer = (state: tasks[] = initialState.tasks, action: T_ActionTask): tasks[] => {
  switch (action.type) {
    case TasksTypes.CREATE:
      return [...state, action.payload];
    case TasksTypes.REMOVE:
      return state.filter(s => s.id !== action.payload);
    case TasksTypes.CLEAR:
      return [];
    default:
      return state;
  }
};

export default taskReducer;
