import types from "../mutation-types";

import { FlowState } from "../state";

export default {
  [types.CHANGE_OPERATOR_STYLE](state: FlowState) {
    // 操作层离顶部高度
    let top = 0;
    const { index, dataSource, section } = state;
    for (let i = 0; i < index; i += 1) {
      top += dataSource[i].styles.height;
    }

    // 操作层高度
    const height = section ? section.styles.height : 0;

    state.operatorStyle = { top, height };
  },

  [types.CHANGE_OPERATOR_HEIGHT](state: FlowState, height: number) {
    state.operatorStyle!.height = height;
  },
};
