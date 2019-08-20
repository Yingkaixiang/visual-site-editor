import { Commit } from "vuex";
import { FlowState } from "../state";
import { Section, Component } from "@/global.d";

import types from "../mutation-types";

export interface ActionDoubleClick {
  section: Section;
  component: Component;
}

export default {
  doubleClick(ctx: { commit: Commit, state: FlowState }, payload: ActionDoubleClick) {
    ctx.commit(types.INSERT_TO_BOTTOM, payload);
  },
};
