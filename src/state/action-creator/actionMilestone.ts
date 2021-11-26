import { ActionTypes } from "../action-types/crud";
import { Action } from "../action";
import { milestones } from "../types/context";


export const addMilestone = (milestone: milestones): Action<milestones> => {
  return {
    type: ActionTypes.CREATE,
    payload: milestone
  };
};

export const getMilestones = (): Action<void> => {
  return {
    type: ActionTypes.READ,
  };
};

export const deleteMilestone = (id: string): Action<string> => {
  return {
    type: ActionTypes.REMOVE,
    payload: id
  };
};