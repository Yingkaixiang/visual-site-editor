<template>
  <div>
    <Button
      v-for="component in defaultComponentList"
      :key="component.id"
      @click="handleDoubleClick(component)">{{ component.type }}</Button>
  </div>
</template>

<script lang="ts">
import { Button, Col } from "element-ui";
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";
import { Action } from "vuex-class";

import { createSection, createComponent } from "@/util/data";
import { addInlineStyleUnit } from "@/util/unit";
import ScrollMixin from "@/mixins/scroll";
import { defaultComponentList } from "@/components/";

import { ActionDoubleClick } from "@/store/flow/actions/";
import { IComponent } from "@/global.d";
import { IDefaultComponentList } from "@/components/";

@Component({
  components: {
    Button,
  },
})
export default class Left extends mixins(ScrollMixin) {
  @Action("flow/doubleClick") private doubleClick!: (payload: ActionDoubleClick) => void;

  private defaultComponentList: IDefaultComponentList = defaultComponentList;

  public handleDoubleClick(component: IComponent) {
    const section = createSection("static", "flow", 190);

    this.doubleClick({ section, component });

    this.scrollToBottom();
  }
}
</script>