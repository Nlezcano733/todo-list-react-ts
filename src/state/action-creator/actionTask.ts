import { TasksTypes } from "../action-types/crud";
import { Dispatch } from "react";
import { T_ActionTask } from "../action/T_TaskAction";
import { tasks } from "../types/context";

export const addTasks = (task: tasks) => {
  return (dispatch: Dispatch<T_ActionTask>) => {
    dispatch({
      type: TasksTypes.CREATE,
      payload: task
    });
  };
};

export const getTasks = () => {
  return (dispatch: Dispatch<T_ActionTask>) => {
    dispatch({
      type: TasksTypes.READ
    });
  };
};

export const deleteTasks = (id: string) => {
  return (dispatch: Dispatch<T_ActionTask>) => {
    dispatch({
      type: TasksTypes.REMOVE,
      payload: id
    });
  };
};

export const clearTasks = () => {
  return (dispatch: Dispatch<T_ActionTask>) => {
    dispatch({
      type: TasksTypes.CLEAR
    });
  };
};