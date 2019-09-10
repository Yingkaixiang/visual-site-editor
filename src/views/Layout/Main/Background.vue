<template>
  <div :class="$style.background">
    <div
      v-for="(section, index) in dataSource"
      :class="{
        [$style.container]: true,
        [$style['container-active']]: backgroundHighlightIndex === index,
      }"
      :key="section.id"
      :style="getStyles(section.styles)"
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

import { ActionSelectSection } from "@/store/flow/actions/";
import { CSSProperties, ISection } from "@/index.d";

type SelectSection = (payload: ActionSelectSection) => void;

@Component
export default class Background extends mixins(FlowMixin) {
  @Action("flow/selectSection") private selectSection!: SelectSection;

  private getStyles(styles: CSSProperties) {
    return { height: styles.height };
  }

  private onMouseEnter(index: number) {
    this.moveOnSection(index);
  }

  private onMouseLeave() {
    this.moveOutSection();
  }

  private onBackgroundClick(section: ISection, index: number) {
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
