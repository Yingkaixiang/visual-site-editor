<template>
  <div
    :class="$style.drop"
    v-if="isDragStart"
  >
    <Flow />
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import { mixins } from "vue-class-component";

import Flow from "./Flow/index.vue";

import FlowMixin from "@/mixins/flow";

@Component({
  components: {
    Flow,
  },
})
export default class Drop extends mixins(FlowMixin) {}
</script>

<style lang="scss" module>
.drop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}
</style>