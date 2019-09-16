import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

import { GlobalState } from "@/store/global/state";

@Component
export default class GlobalMixin extends Vue {
  @State("global") public glo!: GlobalState;
  get componentHighlightId() {
    return this.glo.componentHighlightId;
  }

  get configurationType() {
    return this.glo.configurationType;
  }
}
