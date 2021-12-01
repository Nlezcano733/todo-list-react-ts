import { MilestonesTypes } from "../action-types/crud";
import { T_MilestoneAction } from '../action/T_MilestoneAction';
import { Dispatch } from "react";
import { milestones } from "../types/context";


export const addMilestones = (milestone: milestones) => {
  return (dispatch: Dispatch<T_MilestoneAction>) => {
    dispatch({
      type: MilestonesTypes.CREATE,
      payload: milestone
    });
  };
};

export const getMilestones = () => {
  return (dispatch: Dispatch<T_MilestoneAction>) => {
    dispatch({
      type: MilestonesTypes.READ
    });
  };
};

export const deleteMilestones = (id: string) => {
  return (dispatch: Dispatch<T_MilestoneAction>) => {
    dispatch({
      type: MilestonesTypes.REMOVE,
      payload: id
    });
  };
};

export const clearMilestones = () => {
  return (dispatch: Dispatch<T_MilestoneAction>) => {
    dispatch({
      type: MilestonesTypes.CLEAR
    });
  };
};