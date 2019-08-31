<template>
  <div
    :class="$style.editor"
    @mousemove="onHandlerMouseMove"
    @mouseup="onHandlerMouseUp"
  >
    <div :class="$style.left">
      <Left />
    </div>
    <div :class="$style.main" id="main">
      <Main />
    </div>
    <div :class="$style.right">
      <Right />
    </div>
  </div>
</template>

<script lang="ts">
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";

import Left from "@/views/Layout/Left/index.vue";
import Main from "@/views/Layout/Main/index.vue";
import Right from "@/views/Layout/Right/index.vue";

import HandlerMixin from "@/mixins/handler";

@Component({
  components: {
    Left,
    Main,
    Right,
  },
})
export default class App extends mixins(HandlerMixin) {}
</script>

<style lang="scss" module>
.editor {
  display: flex;
  height: 100%;
}

.left {
  width: 400px;
  position: relative;
  overflow: auto;
  box-shadow: 0 12px 12px 0 rgba(0, 0, 0, 0.3);
}

.main {
  flex: 1;
  background: #f4f7f9;
  overflow: auto;
}

.right {
  width: 360px;
  position: relative;
  overflow: auto;
  box-shadow: 0 12px 12px 0 rgba(0, 0, 0, 0.3);
}
</style>