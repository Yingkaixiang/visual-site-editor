import { Types } from "../mutation-types";

import { FlowState } from "../state";

export default {
  [Types.CHANGE_OPERATOR_STYLE](state: FlowState) {
    const { index, dataSource, section } = state;

    if (dataSource.length > 0) {
      let top = 0;
      for (let i = 0; i < index; i += 1) {
        top += dataSource[i].styles.height;
      }
      const height = section ? section.styles.height : 0;
      state.operatorStyle = { top, height };
    } else {
      state.operatorStyle = null;
    }
  },

  [Types.CHANGE_OPERATOR_HEIGHT](state: FlowState, height: number) {
    state.operatorStyle!.height = height;
  },
};
