import { Types } from "../mutation-types";
import { FlowState } from "../state";

import { createSection } from "@/util/data";

export default {
  [Types.CHANGE_IS_DRAG_START](state: FlowState, status: boolean) {
    state.isDragStart = status;
  },

  [Types.CHANGE_IS_DRAG_DROP](state: FlowState, status: boolean) {
    state.isDragDrop = status;
  },

  [Types.ADD_TEMP_SECTION](state: FlowState) {
    const length = state.dataSource.length;
    const total = 2 + (length - 1) + length;
    for (let i = 0; i < total; i += 1) {
      if (i % 2 === 0) {
        const section = createSection("static", "flow-temp", "56px");
        state.dataSource.splice(i, 0, section);
      }
    }
  },

  [Types.REMOVE_TEMP_SECTION](state: FlowState) {
    const length = state.dataSource.length;
    for (let i = 0; i < length; i += 1) {
      const section = state.dataSource[i];
      if (section && section.type === "flow-temp") {
        state.dataSource.splice(i, 1);
      }
    }
  },

  [Types.CHANGE_DRAG_HIGHLIGHT_INDEX](state: FlowState, index: number) {
    state.dragHighlightIndex = index;
  },
};
