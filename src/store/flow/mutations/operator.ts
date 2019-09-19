import { Types } from "../mutation-types";
import { FlowState } from "../state";

import { removeInlineStyleUnit, addInlineStyleUnit } from "@/util/unit";

export default {
  [Types.CHANGE_OPERATOR_STYLE](state: FlowState) {
    const { index, dataSource, section } = state;

    if (!section) { return; }

    if (dataSource.length > 0) {
      let top = 0;
      for (let i = 0; i < index; i += 1) {
        const h = dataSource[i].styles.height as string;
        top += removeInlineStyleUnit(h);
      }
      const height = (section ? section.styles.height : 0) as string;
      state.operatorStyle = { top: addInlineStyleUnit(top, "px"), height };
    } else {
      state.operatorStyle = null;
    }
  },

  [Types.CHANGE_OPERATOR_HEIGHT](state: FlowState, height: string) {
    state.operatorStyle!.height = height;
  },
};
