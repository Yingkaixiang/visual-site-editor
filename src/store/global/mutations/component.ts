import { Types } from "../mutation-types";
import { GlobalState } from "../state";

export default {
  [Types.CHANGE_COMPONENT_HIGHLIGHT_ID](state: GlobalState, id: string) {
    state.componentHighlightId = id;
  },
};
