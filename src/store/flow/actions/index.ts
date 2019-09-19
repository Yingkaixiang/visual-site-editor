import { Commit } from "vuex";

import CSS from "csstype";
import { FlowState } from "../state";

import { Types } from "../mutation-types";
import { Types as GlobalTypes } from "@/store/global/mutation-types";
import { IComponent, ISection } from "@/index.d";

export interface ActionDoubleClick {
  section: ISection;
  component: IComponent;
}

export interface ActionSelectSection {
  section: ISection;
  index: number;
}

export interface ActionDragComponentDrop {
  oldSection: ISection;
  newSection: ISection;
}

export default {
  doubleClick(ctx: { commit: Commit, state: FlowState }, payload: ActionDoubleClick) {
    ctx.commit(Types.INSERT_TO_BOTTOM, payload);
    ctx.commit(Types.CHANGE_SECTION, payload.section);
    ctx.commit(Types.CHANGE_COMPONENT, payload.component);
    ctx.commit(Types.AUTO_ADJUST_SECTION_HEIGHT);
    ctx.commit(Types.CHANGE_OPERATOR_STYLE);

    ctx.commit(`global/${GlobalTypes.CHANGE_CONFIGURATION_TYPE}`, payload.component.type, { root: true });
  },

  selectSection(ctx: { commit: Commit, state: FlowState }, payload: ActionSelectSection) {
    ctx.commit(Types.CHANGE_INDEX, payload.index);
    ctx.commit(Types.CHANGE_SECTION, payload.section);
    ctx.commit(Types.CHANGE_COMPONENT, null);
    ctx.commit(Types.CHANGE_OPERATOR_STYLE);

    ctx.commit(`global/${GlobalTypes.CHANGE_CONFIGURATION_TYPE}`, "section", { root: true });
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

  addNewSectionInFrontCurrent(ctx: { commit: Commit, state: FlowState }, payload: ISection) {
    ctx.commit(Types.ADD_NEW_SECTION_IN_FRONT_CURRENT, payload);
    ctx.commit(Types.CHANGE_COMPONENT, null);
    ctx.commit(Types.CHANGE_OPERATOR_STYLE);
  },

  addNewSectionAtBackCurrent(ctx: { commit: Commit, state: FlowState }, payload: ISection) {
    ctx.commit(Types.ADD_NEW_SECTION_AT_BACK_CURRENT, payload);
    ctx.commit(Types.CHANGE_COMPONENT, null);
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

    ctx.commit(`global/${GlobalTypes.CHANGE_CONFIGURATION_TYPE}`, component.type, { root: true });
  },

  moveComponent(ctx: { commit: Commit, state: FlowState }, styles: any) {
    ctx.commit(Types.CHANGE_COMPONENT_LEFT, styles.left);
    ctx.commit(Types.CHANGE_COMPONENT_TOP, styles.top);
  },

  resizeComponent(ctx: { commit: Commit, state: FlowState }, rect: VSE.IRect) {
    ctx.commit(Types.CHANGE_COMPONENT_STYLE, rect);
  },

  dragComponentStart(ctx: { commit: Commit, state: FlowState }) {
    ctx.commit(Types.CHANGE_IS_DRAG_START, true);
    ctx.commit(Types.ADD_TEMP_SECTION);
    ctx.commit(Types.CHANGE_INDEX, 2 * ctx.state.index + 1);
    ctx.commit(Types.CHANGE_OPERATOR_STYLE);
  },

  dragComponentEnd(ctx: { commit: Commit, state: FlowState }) {
    const { index, isDragDrop } = ctx.state;
    const i = index === 0 ? 0 : (index - 1) / 2;

    ctx.commit(Types.CHANGE_IS_DRAG_START, false);
    ctx.commit(Types.REMOVE_TEMP_SECTION);
    if (!isDragDrop) {
      ctx.commit(Types.CHANGE_INDEX, i);
    }
    ctx.commit(Types.CHANGE_DRAG_HIGHLIGHT_INDEX, -1);
    ctx.commit(Types.CHANGE_OPERATOR_STYLE);
  },

  dragComponentEnter(ctx: { commit: Commit, state: FlowState }, index: number) {
    ctx.commit(Types.CHANGE_DRAG_HIGHLIGHT_INDEX, index);
  },

  dragComponentDrop(ctx: { commit: Commit, state: FlowState }, payload: ActionDragComponentDrop) {
    const { oldSection, newSection } = payload;
    const { index, dragHighlightIndex } = ctx.state;

    ctx.commit(Types.REMOVE_TEMP_SECTION);
    if (oldSection.type === "flow-temp") {
      ctx.commit(Types.ADD_NEW_COMPONENT_TO_NEW_SECTION, newSection);
    } else if (oldSection.type === "flow") {
      console.log("已存在");
    }
    ctx.commit(Types.CHANGE_IS_DRAG_DROP, true);
    ctx.commit(Types.CHANGE_OPERATOR_STYLE);
  },
};
