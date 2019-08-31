<template>
  <div v-if="showConf">区域背景</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

import { FlowState } from "@/store/flow/state";

@Component
export default class Right extends Vue {
  @State("flow") private flow!: FlowState;

  get showConf() {
    return Boolean(this.flow.section);
  }
}
</script>