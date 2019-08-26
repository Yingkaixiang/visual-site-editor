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
      @mouseenter="handleMouseEnter(index)"
      @mouseleave="handleMouseLeave"
    >
      {{ section.id }}
    </div>
  </div>
</template>

<script lang="ts">
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";

import FlowMixin from "@/mixins/flow";

import { addInlineStyleUnit } from "@/util/unit";

interface Styles {
  height: number;
}

@Component
export default class Background extends mixins(FlowMixin) {
  private getStyle({ height }: Styles) {
    return { height: addInlineStyleUnit(height, "px") };
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
