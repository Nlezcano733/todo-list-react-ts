import { TasksTypes } from "../action-types/crud";
import { tasks } from "../types/context";

interface createTask {
  type: TasksTypes.CREATE;
  payload: tasks;
}

interface readTask {
  type: TasksTypes.READ;
  payload?: tasks;
}

interface removeTask {
  type: TasksTypes.REMOVE;
  payload: string;
}

interface searchIdTask {
  type: TasksTypes.GET_ID;
  payload: string;
}

interface searchTask {
  type: TasksTypes.GET_BY_ID;
  payload: string;
}

interface clearTask {
  type: TasksTypes.CLEAR;
  payload?: tasks;
}


export type T_ActionTask =
  createTask
  | readTask
  | removeTask
  | searchIdTask
  | searchTask
  | clearTask;
