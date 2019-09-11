import { Commit } from "vuex";

import CSS from "csstype";
import { FlowState } from "../state";

import { Types } from "../mutation-types";
import { IComponent } from "@/index.d";

type Section = VSE.ISection<CSS.Properties>;
type Component = VSE.IComponent<CSS.Properties>;

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
    ctx.commit(Types.INSERT_TO_BOTTOM, payload);
    ctx.commit(Types.CHANGE_SECTION, payload.section);
    ctx.commit(Types.CHANGE_OPERATOR_STYLE);
    ctx.commit(Types.CHANGE_COMPONENT, payload.component);
  },

  selectSection(ctx: { commit: Commit, state: FlowState }, payload: ActionSelectSection) {
    ctx.commit(Types.CHANGE_INDEX, payload.index);
    ctx.commit(Types.CHANGE_SECTION, payload.section);
    ctx.commit(Types.CHANGE_OPERATOR_STYLE);
  },

  moveOnSection(ctx: { commit: Commit, state: FlowState }, payload: number) {
    ctx.commit(Types.CHANGE_BACKGROUND_HIGHLIGHT_INDEX, payload);
  },

  moveOutSection(ctx: { commit: Commit, state: FlowState }) {
    ctx.commit(Types.CHANGE_BACKGROUND_HIGHLIGHT_INDEX, -1);
  },

  moveHandler(ctx: { commit: Commit, state: FlowState }, payload: string) {
    ctx.commit(Types.CHANGE_SECTION_HEIGHT, payload);
    ctx.commit(Types.CHANGE_OPERATOR_HEIGHT, payload);
  },

  doubleClickHandler(ctx: { commit: Commit, state: FlowState }) {
    ctx.commit(Types.AUTO_ADJUST_SECTION_HEIGHT);
  },

  addNewSectionInFrontCurrent(ctx: { commit: Commit, state: FlowState }, payload: Section) {
    ctx.commit(Types.ADD_NEW_SECTION_IN_FRONT_CURRENT, payload);
    ctx.commit(Types.CHANGE_OPERATOR_STYLE);
  },

  addNewSectionAtBackCurrent(ctx: { commit: Commit, state: FlowState }, payload: Section) {
    ctx.commit(Types.ADD_NEW_SECTION_AT_BACK_CURRENT, payload);
    ctx.commit(Types.CHANGE_OPERATOR_STYLE);
  },

  moveSectionForward(ctx: { commit: Commit, state: FlowState }) {
    ctx.commit(Types.MOVE_SECTION_FORWARD);
    ctx.commit(Types.CHANGE_OPERATOR_STYLE);
  },

  moveSectionBackward(ctx: { commit: Commit, state: FlowState }) {
    ctx.commit(Types.MOVE_SECTION_BACKWARD);
    ctx.commit(Types.CHANGE_OPERATOR_STYLE);
  },

  removeSection(ctx: { commit: Commit, state: FlowState }) {
    ctx.commit(Types.REMOVE_SECTION);
    ctx.commit(Types.CHANGE_OPERATOR_STYLE);
  },

  changeSectionStyle(ctx: { commit: Commit, state: FlowState }, styles: CSS.Properties) {
    ctx.commit(Types.CHANGE_SECTION_STYLE, styles);
  },

  selectComponent(ctx: { commit: Commit, state: FlowState }, component: IComponent) {
    ctx.commit(Types.CHANGE_COMPONENT, component);
  },

  moveComponent(ctx: { commit: Commit, state: FlowState }, styles: any) {
    ctx.commit(Types.CHANGE_COMPONENT_LEFT, styles.left);
    ctx.commit(Types.CHANGE_COMPONENT_TOP, styles.top);
  },
};
