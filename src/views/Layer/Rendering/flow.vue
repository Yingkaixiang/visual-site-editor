<template>
  <div>
    <div
      :class="$style.container"
      v-for="section in dataSource"
      :key="section.id"
      :style="section.styles"
    >
      {{ section.id }}
      <!-- <div
        v-for="component in section.item"
        :key="component._id"
        class="main-rendering-layer-component"
        :style="getComponentStyle(component.styles)"
      >
        <ComponentX :dataSource="component" />
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

import { FlowState } from "@/store/flow/state";

@Component
export default class Flow extends Vue {
  @State("flow") private flow!: FlowState;

  get dataSource() {
    console.dir(this.flow);
    return this.flow.dataSource;
  }
}
</script>

<style lang="scss" module>
.container {
  overflow: hidden;
  position: relative;
  background: red;
}
</style>