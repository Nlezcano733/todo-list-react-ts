import { MilestonesTypes } from "../action-types/crud";
import { milestones } from "../types/context";

interface createMilestone {
  type: MilestonesTypes.CREATE;
  payload: milestones;
}

interface readMilestone {
  type: MilestonesTypes.READ;
  payload?: milestones;
}

interface removeMilestone {
  type: MilestonesTypes.REMOVE;
  payload: string;
}

interface clearMilestone {
  type: MilestonesTypes.CLEAR;
  payload?: milestones;
}


export type T_MilestoneAction =
  createMilestone
  | readMilestone
  | removeMilestone
  | clearMilestone;
