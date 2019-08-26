import types from "../mutation-types";

import { FlowState } from "../state";

export default {
  [types.CHANGE_OPERATOR_TOP](state: FlowState) {
    let top = 0;
    const { index, dataSource } = state;
    for (let i = 0; i < index; i += 1) {
      top += dataSource[i].styles.height;
    }
    state.operatorStyle = { top };
  },
};
