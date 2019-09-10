import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";

import { addInlineStyleUnit, removeInlineStyleUnit } from "@/util/unit";

type Direction = "bottom" | "top";

// 初始的区域高度
let defaultSectionHeight: number = 0;
// 拖动方向
let direction: Direction = "bottom";
// 是否开始拖动
let isDragging: boolean = false;
// 初始的 y 轴坐标
let startY: number = 0;
// 初始 scrollTop
let scrollTop: number = 0;
// 滚动条所在的节点
let ele: Element | undefined;

type MoveHandler = (height: string) => void;

@Component
export default class HandlerMixin extends Vue {
  @Action("flow/moveHandler") public moveHandler!: MoveHandler;

  public onHandlerMouseDown(e: MouseEvent, d: Direction, h: string) {
    defaultSectionHeight = removeInlineStyleUnit(h);
    direction = d;
    isDragging = true;
    startY = e.pageY;

    if (!ele) {
      ele = document.querySelector("#main") as Element;
    }
    scrollTop = ele.scrollTop;
  }

  public onHandlerMouseUp() {
    defaultSectionHeight = 0;
    direction = "bottom";
    isDragging = false;
    startY = 0;
  }

  public onHandlerMouseMove(e: MouseEvent) {
    if (isDragging) {
      const delta = e.pageY - startY;
      const sectionHeight = direction === "top"
        ? defaultSectionHeight - delta
        : defaultSectionHeight + delta;

      const h = addInlineStyleUnit(sectionHeight, "px");
      this.moveHandler(h);

      if (direction === "top" && ele) {
        e.preventDefault();
        ele.scrollTop = scrollTop - delta;
      }
    }
  }
}
