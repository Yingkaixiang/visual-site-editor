<template>
  <div>
    <div
      v-for="(section, index) in dataSource"
      :key="section.id"
      :class="{
        [$style.container]: true,
        [$style['container-active']]: sectionIndex === index,
      }"
      :style="section.styles"
      @click="handleClick(section, index)"
      @mouseenter="handleMouseEnter(index)"
      @mouseleave="handleMouseLeave"
    ></div>
  </div>
</template>

<script lang="ts">
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";
import { Action } from "vuex-class";

import FlowMixin from "@/mixins/flow";

import { Section } from "@/global.d";
import { ActionSelectComponent } from "@/store/flow/actions/index";

type SelectComponent = (payload: ActionSelectComponent) => void;

@Component
export default class Flow extends mixins(FlowMixin) {
  @Action("flow/selectComponent") private selectComponent!: SelectComponent;

  private handleClick(section: Section, index: number) {
    this.selectComponent({ section, index });
  }

  private handleMouseEnter(index: number) {
    this.moveOnSection(index);
  }

  private handleMouseLeave() {
    this.moveOutSection();
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
</style>