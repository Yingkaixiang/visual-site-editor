import Vue from "vue";
import Vuex from "vuex";

import flow from "./flow/";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    flow,
  },
});
