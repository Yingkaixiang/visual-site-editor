<template>
  <div>
    <div
      v-for="component in defaultComponentList"
      draggable="true"
      :class="$style.component"
      :key="component.id"
      @dblclick="onDoubleClick(component)"
      @dragstart="onDragStart($event, component)"
      @dragend="onDragEnd(component)"
    >{{ component.type }}</div>
  </div>
</template>

<script lang="ts">
import { Button, Col } from "element-ui";
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";
import { Action } from "vuex-class";
import shortid from "shortid";
import { cloneDeep } from "lodash";

import { createSection } from "@/util/data";
import { defaultComponentList } from "@/components/";

import ScrollMixin from "@/mixins/scroll";
import GlobalMixin from "@/mixins/global";
import ActionMixin from "@/mixins/action";

import { IDefaultComponentList } from "@/components/";
import { IComponent } from "@/index.d";

@Component({
  components: {
    Button,
  },
})
export default class Left extends mixins(ScrollMixin, GlobalMixin, ActionMixin) {
  private defaultComponentList: IDefaultComponentList = defaultComponentList;

  private onDoubleClick(component: IComponent) {
    const current = this.getComponent(component);

    const section = createSection("static", "flow", "190px");

    this.doubleClick({ section, component: current as IComponent });

    this.scrollToBottom();
  }

  private onDragStart(e: DragEvent, component: IComponent) {
    const current = this.getComponent(component);
    if (e.dataTransfer) {
      e.dataTransfer.setData("drag-data", JSON.stringify(current));
    }
    this.dragComponentStart();
  }

  private onDragEnd(component: IComponent) {
    this.dragComponentEnd();
  }

  private getComponent(component: IComponent): IComponent {
    const current = cloneDeep(component);
    current.id = shortid.generate();
    return current;
  }
}
</script>

<style lang="scss" module>
.component {
  width: 100px;
  height: 50px;
  border: 1px solid #000;
  user-select: none;
}
</style>