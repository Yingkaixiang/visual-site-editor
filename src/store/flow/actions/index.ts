import { Commit } from "vuex";
import { FlowState } from "../state";
import { Section, Component } from "@/global.d";

import types from "../mutation-types";

export interface ActionDoubleClick {
  section: Section;
  component: Component;
}

export interface ActionSelectComponent {
  section: Section;
  index: number;
}

export default {
  doubleClick(ctx: { commit: Commit, state: FlowState }, payload: ActionDoubleClick) {
    ctx.commit(types.INSERT_TO_BOTTOM, payload);
  },

  selectComponent(ctx: { commit: Commit, state: FlowState }, payload: ActionSelectComponent) {
    ctx.commit(types.CHANGE_INDEX, payload.index);
    ctx.commit(types.CHANGE_SECTION, payload.section);
  },

  moveOnSection(ctx: { commit: Commit, state: FlowState }, payload: number) {
    ctx.commit(types.CHANGE_BACKGROUND_HIGHLIGHT_INDEX, payload);
  },

  moveOutSection(ctx: { commit: Commit, state: FlowState }) {
    ctx.commit(types.CHANGE_BACKGROUND_HIGHLIGHT_INDEX, -1);
  },
};
