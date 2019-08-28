import types from "../mutation-types";

import { FlowState } from "../state";
import { Section, Component } from "@/global.d";

import operatorMutations from "./operator";

interface MutationInsertToBottom {
  section: Section;
  component: Component;
}

export default {
  ...operatorMutations,

  [types.INSERT_TO_BOTTOM](state: FlowState, payload: MutationInsertToBottom) {
    const { section, component } = payload;
    section.components.push(component);
    const index = state.dataSource.push(section);
    state.index = index - 1;
  },

  [types.CHANGE_INDEX](state: FlowState, payload: number) {
    state.index = payload;
  },

  [types.CHANGE_SECTION](state: FlowState, payload: Section) {
    state.section = payload;
  },

  [types.CHANGE_SECTION_HEIGHT](state: FlowState, payload: number) {
    state.section!.styles.height = payload;
  },

  [types.CHANGE_BACKGROUND_HIGHLIGHT_INDEX](state: FlowState, payload: number) {
    state.backgroundHighlightIndex = payload;
  },
};
