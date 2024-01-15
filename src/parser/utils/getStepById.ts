import { Step } from "../../types";

export const getStepById = (id: number, steps: Step[]): Step => steps[id - 1];
