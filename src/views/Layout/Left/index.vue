<template>
  <div>
    <Button @click="handleDoubleClick">文字组件</Button>
  </div>
</template>

<script lang="ts">
import { Button } from "element-ui";
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";

import { createSection, createComponent } from "@/util/mock";
import { ActionDoubleClick } from "@/store/flow/actions/";

@Component({
  components: {
    Button,
  },
})
export default class Left extends Vue {
  @Action("flow/doubleClick") private doubleClick!: (payload: ActionDoubleClick) => void;

  public handleDoubleClick() {
    const section = createSection("static", "flow", "190px");
    const component = createComponent("text");

    this.doubleClick({ section, component });
  }
}
</script>