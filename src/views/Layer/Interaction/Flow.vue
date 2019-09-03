<template>
  <div>
    <div
      v-for="(section, index) in dataSource"
      :key="section.id"
      :class="{
        [$style.container]: true,
        [$style['container-active']]: sectionIndex === index,
      }"
      :style="getSectionStyle(section)"
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
import { ActionSelectSection } from "@/store/flow/actions/";

import { convertInlineStyle } from "@/util/unit";

type SelectSection = (payload: ActionSelectSection) => void;

@Component
export default class Flow extends mixins(FlowMixin) {
  @Action("flow/selectSection") private selectSection!: SelectSection;

  private convertInlineStyle = convertInlineStyle;

  private handleClick(section: Section, index: number) {
    this.selectSection({ section, index });
  }

  private handleMouseEnter(index: number) {
    this.moveOnSection(index);
  }

  private handleMouseLeave() {
    this.moveOutSection();
  }

  private getSectionStyle(section: Section) {
    const styles = convertInlineStyle(section.styles);
    return { height: styles.height };
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