<template>
  <div>
    <div
      :class="$style.container"
      v-for="section in dataSource"
      :key="section.id"
      :style="section.styles"
    >
      {{ section.id }}
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
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

import { FlowState } from "@/store/flow/state";
import ComponentX from "./components.vue";

@Component({
  components: {
    ComponentX,
  },
})
export default class Flow extends Vue {
  @State("flow") private flow!: FlowState;

  get dataSource() {
    return this.flow.dataSource;
  }
}
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