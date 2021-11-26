import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import milestoneReducer from './milestoneReducer';


const reducers = combineReducers({
  task: taskReducer,
  milestone: milestoneReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;