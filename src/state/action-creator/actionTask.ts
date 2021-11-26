import { ActionTypes } from "../action-types/crud";
import { Action } from "../action";
import { tasks } from "../types/context";

export const addTask = (task: tasks): Action<tasks> => {
  return {
    type: ActionTypes.CREATE,
    payload: task
  };
};

export const getTask = (): Action<void> => {
  return {
    type: ActionTypes.READ,
  };
};

export const updateTask = (task: tasks): Action<tasks> => {
  return {
    type: ActionTypes.UPDATE,
    payload: task
  };
};

export const deleteTask = (id: string): Action<string> => {
  return {
    type: ActionTypes.REMOVE,
    payload: id
  };
};


// export const updateTask = (task: number) => {
//   return (dispatch: Dispatch<Action>) => {
//     dispatch({
//       type: ActionTypes.UPDATE,
//       payload: task
//     });
//   };
// };