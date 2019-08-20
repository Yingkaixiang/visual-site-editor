import { Section } from "@/global";

export interface FlowState {
  dataSource: Section[];
}

const state: FlowState = {
  dataSource: [],
};

export default state;
