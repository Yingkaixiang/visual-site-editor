import { INSERT_TO_BOTTOM } from "../types/";

import { FlowState } from "../state";
import { Section, Component } from "../../typings.d";

interface MutationInsertToBottom {
  section: Section;
  component: Component;
}

export default {
  [INSERT_TO_BOTTOM](state: FlowState, payload: MutationInsertToBottom) {
    const { section } = payload;
    const index = state.dataSouce.push(section);
    console.log(index);
  },
};
