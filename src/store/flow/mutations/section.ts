import Vue from "vue";

import { Types } from "../mutation-types";

import CSS from "csstype";
import { FlowState } from "../state";
import { Section, IComponent } from "@/global.d";

interface MutationInsertToBottom {
  section: Section;
  component: IComponent;
}

export default {
  [Types.INSERT_TO_BOTTOM](state: FlowState, payload: MutationInsertToBottom) {
    const { section, component } = payload;
    section.components.push(component);
    const index = state.dataSource.push(section);
    state.index = index - 1;
  },

  [Types.CHANGE_INDEX](state: FlowState, payload: number) {
    state.index = payload;
  },

  [Types.CHANGE_SECTION](state: FlowState, payload: Section) {
    state.section = payload;
  },

  [Types.CHANGE_SECTION_HEIGHT](state: FlowState, payload: number) {
    state.section!.styles.height = payload;
  },

  [Types.CHANGE_BACKGROUND_HIGHLIGHT_INDEX](state: FlowState, payload: number) {
    state.backgroundHighlightIndex = payload;
  },

  [Types.AUTO_ADJUST_SECTION_HEIGHT](state: FlowState, payload: number) {
    console.log("自动调整高度");
  },

  // 在当前区域的上方添加一个新区域
  [Types.ADD_NEW_SECTION_IN_FRONT_CURRENT](state: FlowState, payload: Section) {
    const { index } = state;
    state.dataSource.splice(index, 0, payload);
    state.section = payload;
  },

  // 在当前区域的下方添加一个新区域
  [Types.ADD_NEW_SECTION_AT_BACK_CURRENT](state: FlowState, payload: Section) {
    const { index } = state;
    state.dataSource.splice(index + 1, 0, payload);
    state.index = index + 1;
    state.section = payload;
  },

  // 将当前区域向前移动一格
  [Types.MOVE_SECTION_FORWARD](state: FlowState, payload: Section) {
    const { index } = state;
    const deletedSection = state.dataSource.splice(index, 1);
    state.dataSource.splice(index - 1, 0, deletedSection[0]);
    state.index = index - 1;
    state.section = deletedSection[0];
  },

  // 将当前区域向后移动一格
  [Types.MOVE_SECTION_BACKWARD](state: FlowState, payload: Section) {
    const { index } = state;
    const deletedSection = state.dataSource.splice(index, 1);
    state.dataSource.splice(index + 1, 0, deletedSection[0]);
    state.index = index + 1;
    state.section = deletedSection[0];
  },

  // 删除区域
  [Types.REMOVE_SECTION](state: FlowState) {
    const { index, dataSource } = state;
    const length = dataSource.length;

    state.dataSource.splice(index, 1);

    // 文档流只有一个区域时
    if (length === 1) {
      state.operatorStyle = null;
      state.section = null;
      state.index = -1;
    // 删除元素是文档流的最后一个元素
    } else if (index === length - 1) {
      state.section = dataSource[index - 1];
      state.index = index - 1;
    } else {
      state.section = state.dataSource[index];
    }
  },

  // 修改区域样式
  [Types.CHANGE_SECTION_STYLE](state: FlowState, styles: CSS.Properties) {
    state.section!.styles = styles;
  },
};
