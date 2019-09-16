import { Types } from "../mutation-types";
import componentMutations from "./component";

import { GlobalState } from "../state";

export default {
  ...componentMutations,

  [Types.CHANGE_CONFIGURATION_TYPE](state: GlobalState, type: VSE.IComponentType) {
    state.configurationType = type;
  },
};
