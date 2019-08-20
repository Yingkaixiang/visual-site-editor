import { ActionDoubleClick } from "../actions";

import store from "../../index";

export const doubleClick = (payload: ActionDoubleClick) => {
  return store.dispatch("flow/doubleClick", payload);
};
