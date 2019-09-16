<template>
  <div :class="$style.operator" :style="operatorTop" v-if="isShow">
    <div :class="$style.bar">
      <Tooltip content="上插空白区域" placement="right">
        <div
          :class="{
            [$style.btn]: true,
            [$style['btn-top']]: true,
          }"
          @click="onAddBtnClick('top')"
        >
          <i class="el-icon-plus" />
        </div>
      </Tooltip>

      <Tooltip
        v-if="sectionIndex !== 0"
        content="上移"
        placement="right"
      >
        <div
          :class="$style.btn"
          @click="onMoveBtnClick('forward')"
        >
          <i class="el-icon-top" />
        </div>
      </Tooltip>

      <Tooltip
        v-if="sectionIndex !== length - 1"
        content="下移"
        placement="right"
      >
        <div
          :class="$style.btn"
          @click="onMoveBtnClick('backward')"
        >
          <i class="el-icon-bottom" />
        </div>
      </Tooltip>

      <div
        :class="$style.btn"
        @click="onConfigurationClick"
      >
        <i class="el-icon-setting" />
      </div>

      <Tooltip content="删除" placement="right">
        <div :class="$style.btn" @click="onRemoveBtnClick">
          <i class="el-icon-delete" />
        </div>
      </Tooltip>

      <Tooltip content="下插空白区域" placement="right">
        <div
          :class="{
            [$style.btn]: true,
            [$style['btn-bottom']]: true,
          }"
          @click="onAddBtnClick('bottom')"
        >
          <i class="el-icon-plus" />
        </div>
      </Tooltip>
    </div>

    <div :class="$style.handler" :style="operatorHeight">
      <div
        :class="{
          [$style['handler-btn']]: true,
          [$style['handler-top']]: true,
        }"
        @mousedown="onHandlerMouseDown($event, 'top', height)"
        @dblclick="onHandlerDoubleClick"
      ></div>
      <div
        :class="{
          [$style['handler-btn']]: true,
          [$style['handler-bottom']]: true,
        }"
        @mousedown="onHandlerMouseDown($event, 'bottom', height)"
        @dblclick="onHandlerDoubleClick"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";
import { State, Action } from "vuex-class";
import { Tooltip } from "element-ui";

import { FlowState } from "@/store/flow/state";
import CSS from "csstype";
import { ActionSelectSection } from "@/store/flow/actions/";
import { ISection } from "@/index.d";

import { createSection } from "@/util/data";
import HandlerMixin from "@/mixins/handler";
import GlobalMixin from "@/mixins/global";

type SelectSection = (payload: ActionSelectSection) => void;

@Component({
  components: {
    Tooltip,
  },
})
export default class Operator extends mixins(HandlerMixin, GlobalMixin) {
  @State("flow") public flow!: FlowState;
  @Action("flow/doubleClickHandler") private doubleClickHandler!: () => void;
  @Action("flow/addNewSectionInFrontCurrent") private addNewSectionInFrontCurrent!:
    (section: ISection) => void;
  @Action("flow/addNewSectionAtBackCurrent") private addNewSectionAtBackCurrent!:
    (section: ISection) => void;
  @Action("flow/moveSectionForward") private moveSectionForward!: () => void;
  @Action("flow/moveSectionBackward") private moveSectionBackward!: () => void;
  @Action("flow/removeSection") private removeSection!: () => void;
  @Action("flow/selectSection") private selectSection!: SelectSection;

  get height() {
    return this.flow.operatorStyle!.height;
  }

  get operatorTop() {
    return {
      top: this.flow.operatorStyle!.top,
    };
  }

  get operatorHeight() {
    return { height: this.height };
  }

  get isShow() {
    return Boolean(this.flow.operatorStyle);
  }

  get sectionIndex() {
    return this.flow.index;
  }

  get section() {
    return this.flow.section;
  }

  get length() {
    return this.flow.dataSource.length;
  }

  public onHandlerDoubleClick() {
    this.doubleClickHandler();
  }

  private onAddBtnClick(type: "top" | "bottom") {
    const section = createSection("static", "flow", "190px");
    if (type === "top") {
      this.addNewSectionInFrontCurrent(section);
    } else if (type === "bottom") {
      this.addNewSectionAtBackCurrent(section);
    }
  }

  private onMoveBtnClick(type: "forward" | "backward") {
    if (type === "forward") {
      this.moveSectionForward();
    } else if (type === "backward") {
      this.moveSectionBackward();
    }
  }

  private onRemoveBtnClick() {
    this.removeSection();
  }

  private onConfigurationClick() {
    if (this.section && this.sectionIndex > -1) {
      this.selectSection({ section: this.section, index: this.sectionIndex });
    }
  }
}
</script>

<style lang="scss" module>
.operator {
  position: absolute;
  min-height: 272px;
  right: -56px;
  z-index: 90;
}

.bar {
  height: 100%;
}

.btn {
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &-top {
    margin-top: -20px;
    margin-bottom: 40px;
  }

  &-bottom {
    margin-top: 40px;
    margin-bottom: -20px;
  }

  &:hover {
    color: #81b0ff;
  }
}

.handler {
  position: absolute;
  top: 0;
  left: (-375px / 2 - 16 - 32);

  &-btn {
    box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.1);
    cursor: ns-resize;
    width: 64px;
    height: 16px;
    position: absolute;
    left: 0;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      content: "";
      display: block;
      width: 26px;
      height: 3px;
      border-top: 1px solid rgba(0, 0, 0, 0.25);
      border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    }
  }

  &-top {
    top: -16px;
    border-radius: 64px 64px 0 0;
  }

  &-bottom {
    bottom: -16px;
    border-radius: 0 0 64px 64px;
  }
}
</style>
