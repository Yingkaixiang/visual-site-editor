import { INSERT_TO_BOTTOM } from "../mutation-types";

import { FlowState } from "../state";
import { Section, Component } from "@/global.d";

interface MutationInsertToBottom {
  section: Section;
  component: Component;
}

export default {
  [INSERT_TO_BOTTOM](state: FlowState, payload: MutationInsertToBottom) {
    const { section, component } = payload;
    section.components.push(component);
    const index = state.dataSource.push(section);
  },
};
