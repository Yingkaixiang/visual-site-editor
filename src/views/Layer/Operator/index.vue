<template>
  <div :class="$style.operator" :style="operatorTop" v-if="isShow">
    <div :class="$style.bar">
      <div
        :class="{
          [$style.btn]: true,
          [$style['btn-top']]: true,
        }"
      >
        <i class="el-icon-plus" />
      </div>

      <div :class="$style.btn">
        <i class="el-icon-top" />
      </div>

      <div :class="$style.btn">
        <i class="el-icon-bottom" />
      </div>

      <div :class="$style.btn">
        <i class="el-icon-setting" />
      </div>

      <div :class="$style.btn">
        <i class="el-icon-delete" />
      </div>

      <div
        :class="{
          [$style.btn]: true,
          [$style['btn-bottom']]: true,
        }"
      >
        <i class="el-icon-plus" />
      </div>
    </div>

    <div :class="$style.handler" :style="operatorHeight">
      <div
        :class="{
          [$style['handler-btn']]: true,
          [$style['handler-top']]: true,
        }"
        @mousedown="onHandlerMouseDown($event, 'top', height)"
      ></div>
      <div
        :class="{
          [$style['handler-btn']]: true,
          [$style['handler-bottom']]: true,
        }"
        @mousedown="onHandlerMouseDown($event, 'bottom', height)"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";
import { State } from "vuex-class";

import { FlowState } from "@/store/flow/state";

import { convertInlineStyle } from "@/util/unit";
import HandlerMixin from "@/mixins/handler";

@Component
export default class Operator extends mixins(HandlerMixin) {
  @State("flow") public flow!: FlowState;

  get height() {
    return this.flow.operatorStyle!.height;
  }

  get operatorTop() {
    return convertInlineStyle({
      top: this.flow.operatorStyle!.top,
    });
  }

  get operatorHeight() {
    return convertInlineStyle({
      height: this.height,
    });
  }

  get isShow() {
    return Boolean(this.flow.operatorStyle);
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
