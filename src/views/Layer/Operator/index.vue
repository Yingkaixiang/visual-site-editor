<template>
  <div :class="$style.operator" :style="operatorStyle">
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";

import { FlowState } from "@/store/flow/state";

import { convertInlineStyle } from "@/util/unit";

@Component
export default class Operator extends Vue {
  @State("flow") public flow!: FlowState;

  get operatorStyle() {
    return convertInlineStyle(this.flow.operatorStyle);
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
</style>
