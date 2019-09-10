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
        :class="$style.substitute"
        v-for="(component) in section.components"
        :key="component.id"
        :style="component.styles"
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
      />
    </div>
  </div>
</template>

<script lang="ts">
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";
import { Action } from "vuex-class";
import VueDragResize from "vue-drag-resize";

import FlowMixin from "@/mixins/flow";
import { ISection, IComponent, CSSProperties } from "@/index.d";

import { ActionSelectSection } from "@/store/flow/actions/";

import { convertInlineStyle, removeInlineStyleUnit } from "@/util/unit";

type SelectSection = (payload: ActionSelectSection) => void;

@Component({
  components: {
    VueDragResize,
  },
})
export default class Flow extends mixins(FlowMixin) {
  @Action("flow/selectSection") private selectSection!: SelectSection;

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

  private onSubstituteMouseEnter(e: VSE.IEvent, component: IComponent) {
    console.log(1);
  }

  private onSubstituteMouseLeave() {
    console.log(2);
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

.vdr {
  pointer-events: none;
}
</style>