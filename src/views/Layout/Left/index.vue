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
import shortid from "shortid";
import { cloneDeep } from "lodash";

import { createSection } from "@/util/data";
import { defaultComponentList } from "@/components/";
import ScrollMixin from "@/mixins/scroll";

import { ActionDoubleClick } from "@/store/flow/actions/";
import { IDefaultComponentList } from "@/components/";
import { IComponentDefault, IComponent } from "@/index.d";

type DoubleClick = (payload: ActionDoubleClick) => void;
interface C extends IComponentDefault {
  id: string;
}

@Component({
  components: {
    Button,
  },
})
export default class Left extends mixins(ScrollMixin) {
  @Action("flow/doubleClick") private doubleClick!: DoubleClick;

  private defaultComponentList: IDefaultComponentList = defaultComponentList;

  public handleDoubleClick(component: IComponentDefault) {
    const comp: any = cloneDeep(component);
    comp.id = shortid.generate();

    const section = createSection("static", "flow", "190px");

    this.doubleClick({ section, component: comp as IComponent });

    this.scrollToBottom();
  }
}
</script>