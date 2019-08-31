<template>
  <div :class="$style.background">
    <div
      v-for="(section, index) in dataSource"
      :class="{
        [$style.container]: true,
        [$style['container-active']]: backgroundHighlightIndex === index,
      }"
      :key="section.id"
      :style="getStyle(section.styles)"
      @mouseenter="onMouseEnter(index)"
      @mouseleave="onMouseLeave"
      @click="onBackgroundClick(section, index)"
    >
      {{ section.id }}
    </div>
  </div>
</template>

<script lang="ts">
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";
import { Action } from "vuex-class";

import FlowMixin from "@/mixins/flow";

import { addInlineStyleUnit } from "@/util/unit";

import { ActionSelectSection } from "@/store/flow/actions/";
import { Section } from "@/global.d";

type SelectSection = (payload: ActionSelectSection) => void;

interface Styles {
  height: number;
}

@Component
export default class Background extends mixins(FlowMixin) {
  @Action("flow/selectSection") private selectSection!: SelectSection;

  private getStyle({ height }: Styles) {
    return { height: addInlineStyleUnit(height, "px") };
  }

  private onMouseEnter(index: number) {
    this.moveOnSection(index);
  }

  private onMouseLeave() {
    this.moveOutSection();
  }

  private onBackgroundClick(section: Section, index: number) {
    this.selectSection({ section, index });
  }
}
</script>

<style lang="scss" module>
.background {
  display: block;
}

.container {
  position: relative;

  &-active {
    background: #eee;
  }
}
</style>
