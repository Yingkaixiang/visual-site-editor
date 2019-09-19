<template>
  <div v-if="isDragStart">
    <div
      :class="$style.section"
      v-for="(section, index) in dataSource"
      :key="section.id"
      :style="getStyle(section.styles)"
      @dragenter="onDragEnter($event, index)"
      @dragover="onDragOver"
      @drop="onDrop($event, section)"
    >
      <div
        :class="{
          [$style.holder]: true,
          [$style['holder-exist']]: section.type === 'flow',
          [$style['holder-active']]: dragHighlightIndex === index,
        }"
      >
        {{ section.type === "flow-temp" ? "插在此处" : "放在这里" }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";

import FlowMixin from "@/mixins/flow";
import ActionMixin from "@/mixins/action";

import { createSection } from "@/util/data";

import { CSSProperties, ISection } from "@/index.d";

export default class Flow extends mixins(FlowMixin, ActionMixin) {
  private getStyle(styles: CSSProperties) {
    return { height: styles.height };
  }

  private onDragEnter(e: DragEvent, index: number) {
    e.preventDefault();
    this.dragComponentEnter(index);
  }

  private onDragOver(e: DragEvent) {
    e.preventDefault();
  }

  private onDrop(e: DragEvent, section: ISection) {
    e.preventDefault();
    if (e.dataTransfer) {
      const data = JSON.parse(e.dataTransfer.getData("drag-data"));
      const newSection = createSection("static", "flow", "190px");
      newSection.components = [data];
      this.dragComponentDrop({ oldSection: section, newSection });
    }
  }
}
</script>

<style lang="scss" module>
.section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.holder {
  color: #333;
  font-size: 16px;
  position: relative;
  width: calc(100% - 16px);
  height: calc(100% - 16px);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  &-exist {
    background: rgba(0,0,0,.6);
    color: #fff;
  }

  &-active {
    background: rgba(147, 176, 226, 0.5);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 4px;
    border: 1px dashed #333;
  }
}
</style>