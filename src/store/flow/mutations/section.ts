import { Types } from "../mutation-types";
import { removeInlineStyleUnit, addInlineStyleUnit } from "@/util/unit";

import { FlowState } from "../state";
import { ISection, IComponent, CSSProperties } from "@/index.d";

interface MutationInsertToBottom {
  section: ISection;
  component: IComponent;
}

interface MutationAddNewComponentToExistSection {
  component: IComponent;
  index: number;
}

export default {
  // 插入底部
  [Types.INSERT_TO_BOTTOM](state: FlowState, payload: MutationInsertToBottom) {
    const { section, component } = payload;
    section.components.push(component);
    const index = state.dataSource.push(section);
    state.index = index - 1;
  },

  // 修改当前区域索引
  [Types.CHANGE_INDEX](state: FlowState, payload: number) {
    state.index = payload;
  },

  // 修改当前区域
  [Types.CHANGE_SECTION](state: FlowState, payload: ISection) {
    state.section = payload;
  },

  // 修改当前区域高度
  [Types.CHANGE_SECTION_HEIGHT](state: FlowState, payload: string) {
    state.section!.styles.height = payload;
  },

  // 修改背景高亮索引
  [Types.CHANGE_BACKGROUND_HIGHLIGHT_INDEX](state: FlowState, payload: number) {
    state.backgroundHighlightIndex = payload;
  },

  // 自动调整区域高度
  [Types.AUTO_ADJUST_SECTION_HEIGHT](state: FlowState) {
    const { section } = state;
    if (section) {
      const max = section.components.reduce((prev: number, current: IComponent) => {
        const top = removeInlineStyleUnit(current.styles.top!);
        const height = removeInlineStyleUnit(current.styles.height!);
        const sum = top + height;

        if (sum > prev) {
          return sum;
        }

        return prev;
      }, 0);

      section.styles.height = addInlineStyleUnit(max, "px");
    }
  },

  // 在当前区域的上方添加一个新区域
  [Types.ADD_NEW_SECTION_IN_FRONT_CURRENT](state: FlowState, payload: ISection) {
    const { index } = state;
    state.dataSource.splice(index, 0, payload);
    state.section = payload;
  },

  // 在当前区域的下方添加一个新区域
  [Types.ADD_NEW_SECTION_AT_BACK_CURRENT](state: FlowState, payload: ISection) {
    const { index } = state;
    state.dataSource.splice(index + 1, 0, payload);
    state.index = index + 1;
    state.section = payload;
  },

  // 将当前区域向前移动一格
  [Types.MOVE_SECTION_FORWARD](state: FlowState, payload: ISection) {
    const { index } = state;
    const deletedSection = state.dataSource.splice(index, 1);
    state.dataSource.splice(index - 1, 0, deletedSection[0]);
    state.index = index - 1;
    state.section = deletedSection[0];
  },

  // 将当前区域向后移动一格
  [Types.MOVE_SECTION_BACKWARD](state: FlowState, payload: ISection) {
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
  [Types.CHANGE_SECTION_STYLE](state: FlowState, styles: CSSProperties) {
    state.section!.styles = styles;
  },

  // 在新区域中插入一个新组件
  [Types.ADD_NEW_COMPONENT_TO_NEW_SECTION](state: FlowState, section: ISection) {
    const index = state.dragHighlightIndex / 2;
    state.dataSource.splice(index, 0, section);
    state.section = section;
    state.index = index;
  },

  // 在已存在区域里插入一个新组件
  [Types.ADD_NEW_COMPONENT_TO_EXIST_SECTION](state: FlowState, payload: MutationAddNewComponentToExistSection) {
    const { index, component } = payload;
    state.dataSource[index].components.push(component);
    state.section = state.dataSource[index];
    state.index = index;
  },
};
