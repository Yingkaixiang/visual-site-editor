import { Commit } from "vuex";
import { FlowState } from "../state";
import { Section, Component } from "@/global.d";

import types from "../mutation-types";

export interface ActionDoubleClick {
  section: Section;
  component: Component;
}

export interface ActionSelectSection {
  section: Section;
  index: number;
}

export default {
  doubleClick(ctx: { commit: Commit, state: FlowState }, payload: ActionDoubleClick) {
    ctx.commit(types.INSERT_TO_BOTTOM, payload);
    ctx.commit(types.CHANGE_SECTION, payload.section);
    ctx.commit(types.CHANGE_OPERATOR_STYLE);
  },

  selectSection(ctx: { commit: Commit, state: FlowState }, payload: ActionSelectSection) {
    ctx.commit(types.CHANGE_INDEX, payload.index);
    ctx.commit(types.CHANGE_SECTION, payload.section);
    ctx.commit(types.CHANGE_OPERATOR_STYLE);
  },

  moveOnSection(ctx: { commit: Commit, state: FlowState }, payload: number) {
    ctx.commit(types.CHANGE_BACKGROUND_HIGHLIGHT_INDEX, payload);
  },

  moveOutSection(ctx: { commit: Commit, state: FlowState }) {
    ctx.commit(types.CHANGE_BACKGROUND_HIGHLIGHT_INDEX, -1);
  },

  moveHandler(ctx: { commit: Commit, state: FlowState }, payload: number) {
    ctx.commit(types.CHANGE_SECTION_HEIGHT, payload);
    ctx.commit(types.CHANGE_OPERATOR_HEIGHT, payload);
  },

  doubleClickHandler(ctx: { commit: Commit, state: FlowState }) {
    ctx.commit(types.AUTO_ADJUST_SECTION_HEIGHT);
  },

  addNewSectionInFrontCurrent(ctx: { commit: Commit, state: FlowState }, payload: Section) {
    ctx.commit(types.ADD_NEW_SECTION_IN_FRONT_CURRENT, payload);
    ctx.commit(types.CHANGE_OPERATOR_STYLE);
  },

  addNewSectionAtBackCurrent(ctx: { commit: Commit, state: FlowState }, payload: Section) {
    ctx.commit(types.ADD_NEW_SECTION_AT_BACK_CURRENT, payload);
    ctx.commit(types.CHANGE_OPERATOR_STYLE);
  },

  moveSectionForward(ctx: { commit: Commit, state: FlowState }) {
    ctx.commit(types.MOVE_SECTION_FORWARD);
    ctx.commit(types.CHANGE_OPERATOR_STYLE);
  },

  moveSectionBackward(ctx: { commit: Commit, state: FlowState }) {
    ctx.commit(types.MOVE_SECTION_BACKWARD);
    ctx.commit(types.CHANGE_OPERATOR_STYLE);
  },
};
