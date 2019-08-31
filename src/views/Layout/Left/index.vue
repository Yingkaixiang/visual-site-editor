<template>
  <div>
    <Button @click="handleDoubleClick">文字组件</Button>
  </div>
</template>

<script lang="ts">
import { Button } from "element-ui";
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";
import { Action } from "vuex-class";

import { createSection, createComponent } from "@/util/data";
import { addInlineStyleUnit } from "@/util/unit";
import { ActionDoubleClick } from "@/store/flow/actions/";
import ScrollMixin from "@/mixins/scroll";

@Component({
  components: {
    Button,
  },
})
export default class Left extends mixins(ScrollMixin) {
  @Action("flow/doubleClick") private doubleClick!: (payload: ActionDoubleClick) => void;

  public handleDoubleClick() {
    const section = createSection("static", "flow", 190);
    const component = createComponent("text");

    this.doubleClick({ section, component });

    this.scrollToBottom();
  }
}
</script>