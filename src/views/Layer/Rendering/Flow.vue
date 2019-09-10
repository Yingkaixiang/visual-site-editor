<template>
  <div>
    <div
      :class="$style.container"
      v-for="section in dataSource"
      :key="section.id"
      :style="section.styles"
    >
      <div
        v-for="component in section.components"
        :key="component.id"
        :class="$style.component"
        :style="component.styles"
      >
       <ComponentX :type="component.type" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";

import ComponentX from "./ComponentX.vue";

import FlowMixin from "@/mixins/flow";

@Component({
  components: {
    ComponentX,
  },
})
export default class Flow extends mixins(FlowMixin) {}
</script>

<style lang="scss" module>
.container {
  overflow: hidden;
  position: relative;
}

.component {
  position: absolute;
}
</style>