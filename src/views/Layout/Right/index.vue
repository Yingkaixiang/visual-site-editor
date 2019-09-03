<template>
  <div v-if="showConf">
    <Section />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import CSS from "csstype";

import Section from "./Section/index.vue";

import { FlowState } from "@/store/flow/state";

@Component({
  components: {
    Section,
  },
})
export default class Right extends Vue {
  @State("flow") private flow!: FlowState;
  @Action("flow/changeSectionStyle") private changeSectionStyle!: () => void;

  get showConf() {
    return Boolean(this.flow.section);
  }

  private onSectionChange(styles: CSS.Properties) {
    this.changeSectionStyle();
  }
}
</script>