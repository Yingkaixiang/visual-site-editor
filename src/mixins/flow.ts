import { Component, Vue } from "vue-property-decorator";
import { State, Action } from "vuex-class";

import { FlowState } from "@/store/flow/state";

type MoveOnSection = (index: number) => void;
type MoveOutSection = () => void;

@Component
export default class FlowMixin extends Vue {
  @State("flow") public flow!: FlowState;
  @Action("flow/moveOnSection") public moveOnSection!: MoveOnSection;
  @Action("flow/moveOutSection") public moveOutSection!: MoveOutSection;

  get dataSource() {
    return this.flow.dataSource;
  }

  get sectionIndex() {
    return this.flow.index;
  }

  get backgroundHighlightIndex() {
    return this.flow.backgroundHighlightIndex;
  }
}
