<template>
  <div>
    <div
      v-for="(section, index) in dataSource"
      :key="section.id"
      :class="{
        [$style.container]: true,
        [$style['container-active']]: sectionIndex === index,
      }"
      :style="getSectionStyle(section.styles)"
      @mousedown="onSectionMouseDown($event, section, index)"
      @mouseenter="onSectionMouseEnter(index)"
      @mouseleave="onSectionMouseLeave"
    >
      <!--
        因为交互层的层级高于渲染层
        所以用户无法操作到真实组件
        该节点为真实组件的替身
        所有在该节点上的操作都会实时映射到真实组件上
      -->
      <div
        v-for="component in section.components"
        :class="{
          [$style.substitute]: true,
          [$style['substitute-active']]: componentHighlightId === component.id,
        }"
        :key="component.id"
        :style="component.styles"
        @mousedown.stop="onSubstituteMouseDown($event, component, section, index)"
        @mouseenter="onSubstituteMouseEnter($event, component)"
        @mouseleave="onSubstituteMouseLeave"
      ></div>

      <VueDragResize
        v-if="index === sectionIndex && currentComponent"
        :class="$style.vdr"
        :isActive="true"
        :preventActiveBehavior="true"
        :isDraggable="currentComponent.isDraggable || false"
        :isResizable="currentComponent.isResizable || false"
        :aspectRatio="currentComponent.aspectRatio || false"
        :w="w"
        :h="h"
        :minw="1"
        :minh="1"
        :x="x"
        :y="y"
        :z="999"
        :sticks="currentComponent.sticks || []"
        @resizing="onResizing"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import { Action, State } from "vuex-class";
import VueDragResize from "vue-drag-resize";

import FlowMixin from "@/mixins/flow";
import GlobalMixin from "@/mixins/global";

import { removeInlineStyleUnit, addInlineStyleUnit } from "@/util/unit";

import { CSSProperties, ISection, IComponent } from "@/index.d";
import { ActionSelectSection } from "@/store/flow/actions/";

type SelectSection = (payload: ActionSelectSection) => void;
type SelectComponent = (component: IComponent) => void;
type MoveOnComponent = (id: string) => void;
type MoveOutComponent = () => void;
type MoveComponent = (styles: any) => void;
type ResizeComponent = (rect: VSE.IRect) => void;

@Component({
  components: {
    VueDragResize,
  },
})
export default class Flow extends mixins(FlowMixin, GlobalMixin) {
  @Action("flow/selectSection") private selectSection!: SelectSection;
  @Action("flow/selectComponent") private selectComponent!: SelectComponent;
  @Action("global/moveOnComponent") private moveOnComponent!: MoveOnComponent;
  @Action("global/moveOutComponent") private moveOutComponent!: MoveOutComponent;
  @Action("flow/moveComponent") private moveComponent!: MoveComponent;
  @Action("flow/resizeComponent") private resizeComponent!: ResizeComponent;

  private isComponentDrag: boolean = false;
  private startX: number = 0;
  private startY: number = 0;
  private rawX: number = 0;
  private rawY: number = 0;

  public mounted() {
    const root = document.documentElement;
    root.addEventListener("mousemove", this.onBodyMouseMove, false);
    root.addEventListener("mouseup", this.onBodyMouseUp, false);
  }

  public destroyed() {
    const root = document.documentElement;
    root.removeEventListener("mousemove", this.onBodyMouseMove, false);
    root.removeEventListener("mouseup", this.onBodyMouseUp, false);
  }

  private getSectionStyle(styles: CSSProperties) {
    return { height: styles.height };
  }

  private onBodyMouseMove(e: MouseEvent) {
    if (!this.isComponentDrag) {
      return;
    }

    const { pageX, pageY } = e;
    const deltaX = pageX - this.startX;
    const deltaY = pageY - this.startY;
    this.moveComponent({
      left: addInlineStyleUnit(this.rawX + deltaX, "px"),
      top: addInlineStyleUnit(this.rawY + deltaY, "px"),
    });
  }

  private onBodyMouseUp() {
    this.isComponentDrag = false;
    this.startX = 0;
    this.startY = 0;
    this.rawX = 0;
    this.rawY = 0;
  }

  // 区域
  private onSectionMouseEnter(index: number) {
    this.moveOnSection(index);
  }

  private onSectionMouseLeave() {
    this.moveOutSection();
  }

  private onSectionMouseDown(e: MouseEvent, section: ISection, index: number) {
    this.selectSection({ section, index });
  }

  // 组件替身
  private onSubstituteMouseDown(e: MouseEvent, component: IComponent, section: ISection, index: number) {
    const { pageX, pageY } = e;
    this.startX = pageX;
    this.startY = pageY;
    this.isComponentDrag = true;
    this.rawX = removeInlineStyleUnit(component.styles.left!);
    this.rawY = removeInlineStyleUnit(component.styles.top!);

    this.selectSection({ section, index });
    this.selectComponent(component);
  }

  private onSubstituteMouseEnter(e: MouseEvent, component: IComponent) {
    if (component.id) {
      this.moveOnComponent(component.id);
    }
  }

  private onSubstituteMouseLeave() {
    this.moveOutComponent();
  }

  // vdr
  private onResizing(rect: VSE.IRect) {
    this.resizeComponent(rect);
  }

  get w() {
    return removeInlineStyleUnit(this.currentComponent!.styles.width!.toString());
  }

  get h() {
    return removeInlineStyleUnit(this.currentComponent!.styles.height!.toString());
  }

  get x() {
    return removeInlineStyleUnit(this.currentComponent!.styles.left!.toString());
  }

  get y() {
    return removeInlineStyleUnit(this.currentComponent!.styles.top!.toString());
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