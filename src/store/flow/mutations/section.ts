import types from "../mutation-types";

import { FlowState } from "../state";
import { Section, Component } from "@/global.d";

interface MutationInsertToBottom {
  section: Section;
  component: Component;
}

export default {
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

  [types.AUTO_ADJUST_SECTION_HEIGHT](state: FlowState, payload: number) {
    console.log("自动调整高度");
  },

  // 在当前区域的上方添加一个新区域
  [types.ADD_NEW_SECTION_IN_FRONT_CURRENT](state: FlowState, payload: Section) {
    const { index } = state;
    state.dataSource.splice(index, 0, payload);
    state.section = payload;
  },

  // 在当前区域的下方添加一个新区域
  [types.ADD_NEW_SECTION_AT_BACK_CURRENT](state: FlowState, payload: Section) {
    const { index } = state;
    state.dataSource.splice(index + 1, 0, payload);
    state.index = index + 1;
    state.section = payload;
  },

  // 将当前区域向前移动一格
  [types.MOVE_SECTION_FORWARD](state: FlowState, payload: Section) {
    const { index } = state;
    const deletedSection = state.dataSource.splice(index, 1);
    state.dataSource.splice(index - 1, 0, deletedSection[0]);
    state.index = index - 1;
    state.section = deletedSection[0];
  },

  // 将当前区域向后移动一格
  [types.MOVE_SECTION_BACKWARD](state: FlowState, payload: Section) {
    const { index } = state;
    const deletedSection = state.dataSource.splice(index, 1);
    state.dataSource.splice(index + 1, 0, deletedSection[0]);
    state.index = index + 1;
    state.section = deletedSection[0];
  },
};
