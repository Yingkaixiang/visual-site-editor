<template>
  <div>
    <Section v-if="isSection" />
    <RichText v-if="isRichText" />
    <Picture v-if="isPicture" />
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import { mixins } from "vue-class-component";

import Section from "./Section/index.vue";
import RichText from "@/views/Configuration/RichText/index.vue";
import Picture from "@/views/Configuration/Picture/index.vue";

import GlobalMixin from "@/mixins/global";

import { FlowState } from "@/store/flow/state";
import { CSSProperties } from "@/index.d";

@Component({
  components: {
    Section,
    RichText,
    Picture,
  },
})
export default class Right extends mixins(GlobalMixin) {
  @State("flow") private flow!: FlowState;
  @Action("flow/changeSectionStyle") private changeSectionStyle!: () => void;

  get showConf() {
    return Boolean(this.flow.section);
  }

  get isSection() {
    return this.showConf && this.configurationType === "section";
  }

  get isRichText() {
    return this.configurationType === "richText";
  }

  get isPicture() {
    return this.configurationType === "picture";
  }

  private onSectionChange(styles: CSSProperties) {
    this.changeSectionStyle();
  }
}
</script>