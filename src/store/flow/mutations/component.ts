import { Types } from "../mutation-types";

import { FlowState } from "../state";
import { IComponent } from "@/index.d";

export default {
  [Types.CHANGE_COMPONENT](state: FlowState, payload: IComponent) {
    state.component = payload;
  },

  [Types.CHANGE_COMPONENT_LEFT](state: FlowState, left: string) {
    state.component!.styles.left = left;
  },

  [Types.CHANGE_COMPONENT_TOP](state: FlowState, top: string) {
    state.component!.styles.top = top;
  },
};
