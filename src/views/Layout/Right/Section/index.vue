<template>
  <SectionConf
    :styles="sectionStyles"
    @change="onSectionConfChange"
  />
</template>

<script lang="ts">
import CSS from "csstype";
import { Component, Vue } from "vue-property-decorator";
import { Action, State } from "vuex-class";

import SectionConf from "@/views/Configuration/Section/index.vue";

import { FlowState } from "@/store/flow/state";
import { CSSProperties } from "@/index.d";

type ChangeSectionStyle = (styles: CSSProperties) => void;

@Component({
  components: {
    SectionConf,
  },
})
export default class Section extends Vue {
  @State("flow") private flow!: FlowState;
  @Action("flow/changeSectionStyle") private changeSectionStyle!: ChangeSectionStyle;

  private onSectionConfChange(styles: CSSProperties) {
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