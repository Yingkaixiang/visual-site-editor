import { Types } from "../mutation-types";

import { FlowState } from "../state";
import { IComponent } from "@/index.d";
import { addInlineStyleUnit } from "@/util/unit";

export default {
  [Types.CHANGE_COMPONENT](state: FlowState, payload: IComponent) {
    state.component = payload;
  },

  [Types.CHANGE_COMPONENT_LEFT](state: FlowState, left: string) {
    if (state.component) {
      state.component.styles.left = left;
    }
  },

  [Types.CHANGE_COMPONENT_TOP](state: FlowState, top: string) {
    if (state.component) {
      state.component.styles.top = top;
    }
  },

  [Types.CHANGE_COMPONENT_STYLE](state: FlowState, rect: VSE.IRect) {
    state.component!.styles.width = addInlineStyleUnit(rect.width, "px");
    state.component!.styles.height = addInlineStyleUnit(rect.height, "px");
    state.component!.styles.top = addInlineStyleUnit(rect.top, "px");
    state.component!.styles.left = addInlineStyleUnit(rect.left, "px");
  },
};
