<template>
  <SectionConf
    :styles="sectionStyles"
    @change="onSectionConfChange"
  />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CSS from "csstype";
import { Action, State } from "vuex-class";

import SectionConf from "@/views/Configuration/Section/index.vue";

import { FlowState } from "@/store/flow/state";

@Component({
  components: {
    SectionConf,
  },
})
export default class Section extends Vue {
  @State("flow") private flow!: FlowState;
  @Action("flow/changeSectionStyle") private changeSectionStyle!: (styles: CSS.Properties) => void;

  private onSectionConfChange(styles: CSS.Properties) {
    this.changeSectionStyle(styles);
  }

  get section() {
    return this.flow.section;
  }

  get sectionStyles() {
    return this.section!.styles;
  }
}
</script>