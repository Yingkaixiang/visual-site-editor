import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";

import { ActionDoubleClick, ActionDragComponentDrop } from "@/store/flow/actions/";
import { ISection } from "@/index.d";

type IDragComponentStart = () => void;
type IDragComponentEnd = () => void;
type IDragComponentEnter = (index: number) => void;
type IDragComponentDrop = (payload: ActionDragComponentDrop) => void;
type IDoubleClick = (payload: ActionDoubleClick) => void;

@Component
export default class ActionMixin extends Vue {
  @Action("flow/dragComponentStart") public dragComponentStart!: IDragComponentStart;
  @Action("flow/dragComponentEnd") public dragComponentEnd!: IDragComponentEnd;
  @Action("flow/dragComponentEnter") public dragComponentEnter!: IDragComponentEnter;
  @Action("flow/dragComponentDrop") public dragComponentDrop!: IDragComponentDrop;
  @Action("flow/doubleClick") public doubleClick!: IDoubleClick;
}
