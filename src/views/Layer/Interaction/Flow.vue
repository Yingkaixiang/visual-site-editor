<template>
  <div
    @mousemove="onSubstituteMouseMove"
    @mouseup="onSubstituteMouseUp"
  >
    <div
      v-for="(section, index) in dataSource"
      :key="section.id"
      :class="{
        [$style.container]: true,
        [$style['container-active']]: sectionIndex === index,
      }"
      :style="getSectionStyle(section.styles)"
      @click="handleClick(section, index)"
      @mouseenter="handleMouseEnter(index)"
      @mouseleave="handleMouseLeave"
    >
      <!--
        因为交互层的层级高于渲染层
        所以用户无法操作到真实组件
        该节点为真实组件的替身
        所有在该节点上的操作都会实时映射到真实组件上
      -->
      <div
        v-for="(component) in section.components"
        :class="{
          [$style.substitute]: true,
          [$style['substitute-active']]: componentHighlightId === component.id,
        }"
        :key="component.id"
        :style="component.styles"
        @mousedown="onSubstituteMouseDown($event, component)"
        @mouseenter="onSubstituteMouseEnter($event, component)"
        @mouseleave="onSubstituteMouseLeave"
      ></div>

      <VueDragResize
        v-if="index === sectionIndex"
        :class="$style.vdr"
        :isActive="true"
        :preventActiveBehavior="true"
        :isDraggable="currentComponent.isDraggable"
        :isResizable="currentComponent.isResizable"
        :aspectRatio="currentComponent.aspectRatio"
        :w="w"
        :h="h"
        :minw="1"
        :minh="1"
        :x="x"
        :y="y"
        :z="999"
        :sticks="currentComponent.sticks"
        @resizing="onResizing"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";
import { Action, State } from "vuex-class";
import VueDragResize from "vue-drag-resize";

import FlowMixin from "@/mixins/flow";
import { ISection, IComponent, CSSProperties } from "@/index.d";
import { ActionSelectSection } from "@/store/flow/actions/";
import { GlobalState } from "@/store/global/state";

import { removeInlineStyleUnit, addInlineStyleUnit } from "@/util/unit";

type SelectSection = (payload: ActionSelectSection) => void;
type SelectComponent = (component: IComponent) => void;
type MoveOnComponent = (id: string) => void;
type MoveOutComponent = () => void;
type MoveComponent = (styles: any) => void;
type ResizeComponent = (rect: VSE.IRect) => void;

let startX: number = 0;
let startY: number = 0;
let x: number = 0;
let y: number = 0;
let isDrag: boolean = false;

@Component({
  components: {
    VueDragResize,
  },
})
export default class Flow extends mixins(FlowMixin) {
  @State("global") private global!: GlobalState;
  @Action("flow/selectSection") private selectSection!: SelectSection;
  @Action("flow/selectComponent") private selectComponent!: SelectComponent;
  @Action("flow/moveComponent") private moveComponent!: MoveComponent;
  @Action("flow/resizeComponent") private resizeComponent!: ResizeComponent;
  @Action("global/moveOnComponent") private moveOnComponent!: MoveOnComponent;
  @Action("global/moveOutComponent") private moveOutComponent!: MoveOutComponent;

  private handleClick(section: ISection, index: number) {
    this.selectSection({ section, index });
  }

  private handleMouseEnter(index: number) {
    this.moveOnSection(index);
  }

  private handleMouseLeave() {
    this.moveOutSection();
  }

  private getSectionStyle(styles: CSSProperties) {
    return { height: styles.height };
  }

  private onSubstituteMouseEnter(e: MouseEvent, component: IComponent) {
    this.moveOnComponent(component.id);
  }

  private onSubstituteMouseLeave() {
    this.moveOutComponent();
  }

  private onSubstituteMouseDown(e: MouseEvent, component: IComponent) {
    const { pageX, pageY } = e;
    startX = pageX;
    startY = pageY;
    isDrag = true;
    x = removeInlineStyleUnit(component.styles.left!);
    y = removeInlineStyleUnit(component.styles.top!);

    this.selectComponent(component);
  }

  private onSubstituteMouseUp() {
    isDrag = false;
    startX = 0;
    startY = 0;
    x = 0;
    y = 0;
  }

  private onSubstituteMouseMove(e: MouseEvent) {
    if (isDrag) {
      const { pageX, pageY } = e;
      const deltaX = pageX - startX;
      const deltaY = pageY - startY;
      this.moveComponent({
        left: addInlineStyleUnit(x + deltaX, "px"),
        top: addInlineStyleUnit(y + deltaY, "px"),
      });
    }
  }

  private onResizing(rect: VSE.IRect) {
    this.resizeComponent(rect);
  }

  get w() {
    return removeInlineStyleUnit(this.currentComponent!.styles!.width!.toString());
  }

  get h() {
    return removeInlineStyleUnit(this.currentComponent!.styles!.height!.toString());
  }

  get x() {
    return removeInlineStyleUnit(this.currentComponent!.styles!.left!.toString());
  }

  get y() {
    return removeInlineStyleUnit(this.currentComponent!.styles!.top!.toString());
  }

  get componentHighlightId() {
    return this.global.componentHighlightId;
  }
}
</script>

<style lang="scss" module>
.container {
  position: relative;

  &-active {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      border: 2px solid #81b0ff;
    }
  }
}

.substitute {
  position: absolute;
  opacity: 0.5;

  &-active {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      border: 2px dashed #000;
    }
  }
}

.vdr {
  pointer-events: none;
}
</style>