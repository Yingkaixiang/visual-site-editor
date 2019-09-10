import { Types } from "../mutation-types";

import { FlowState } from "../state";
import { IComponent } from "@/global.d";

export default {
  [Types.CHANGE_COMPONENT](state: FlowState, payload: IComponent ) {
    state.component = payload;
  },
};
