import { MilestonesTypes } from "../action-types/crud";

import { milestones } from "../types/context";
import { T_MilestoneAction } from "../action/T_MilestoneAction";
import { initialState } from "../initialState";

const taskReducer = (state: milestones[] = initialState.milestones, action: T_MilestoneAction): milestones[] => {
  switch (action.type) {
    case MilestonesTypes.CREATE:
      return [...state, action.payload];
    case MilestonesTypes.REMOVE:
      return state.filter(s => s.id !== action.payload);
    case MilestonesTypes.CLEAR:
      return [];
    default:
      return state;
  }
};

export default taskReducer;