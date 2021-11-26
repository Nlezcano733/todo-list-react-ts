import { ActionTypes } from "../action-types/crud";

interface create<T> {
  type: ActionTypes.CREATE,
  payload: T;
}

interface read {
  type: ActionTypes.READ;
}

interface update<T> {
  type: ActionTypes.UPDATE,
  payload: T;
}

interface remove {
  type: ActionTypes.REMOVE,
  payload: string;
}

interface searchId {
  type: ActionTypes.GET_ID,
  payload: string;
}

interface search {
  type: ActionTypes.GET_BY_ID,
  payload: string;
}


export type Action<T> =
  create<T>
  | read
  | update<T>
  | remove
  | searchId
  | search;



// interface createTask<T> {
//   type: ActionTypes.CREATE,
//   payload: T;
// }

// interface readTask {
//   type: ActionTypes.READ;
// }

// interface updateTask<T> {
//   type: ActionTypes.UPDATE,
//   payload: T;
// }

// interface removeTask<T> {
//   type: ActionTypes.REMOVE,
//   payload: T;
// }

// interface searchIdTask<T> {
//   type: ActionTypes.GET_ID,
//   payload: T;
// }

// interface searchTask<T> {
//   type: ActionTypes.GET_BY_ID,
//   payload: T;
// }


// export type Action<T> =
//   createTask<T>
//   | readTask
//   | updateTask<T>
//   | removeTask<T>
//   | searchIdTask<T>
//   | searchTask<T>;