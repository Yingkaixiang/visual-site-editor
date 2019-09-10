import { Types } from "../mutation-types";

import { FlowState } from "../state";
import { IComponent } from "@/index.d";

export default {
  [Types.CHANGE_COMPONENT](state: FlowState, payload: IComponent) {
    state.component = payload;
  },
};
