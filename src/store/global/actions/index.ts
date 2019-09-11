import { Commit } from "vuex";

import { Types } from "../mutation-types";
import { GlobalState } from "../state";

export default {
  moveOnComponent(ctx: { commit: Commit, state: GlobalState }, payload: string) {
    ctx.commit(Types.CHANGE_COMPONENT_HIGHLIGHT_ID, payload);
  },

  moveOutComponent(ctx: { commit: Commit, state: GlobalState }) {
    ctx.commit(Types.CHANGE_COMPONENT_HIGHLIGHT_ID, "");
  },
};
