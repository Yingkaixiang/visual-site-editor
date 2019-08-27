<template>
  <div :class="$style.editor">
    <div :class="$style.left">
      <Left />
    </div>
    <div :class="$style.main" id="main">
      <Main />
    </div>
    <div :class="$style.right">
      <!-- <Right /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Left from "@/views/Layout/Left/index.vue";
import Main from "@/views/Layout/Main/index.vue";

@Component({
  components: {
    Left,
    Main,
  },
})
export default class App extends Vue {}
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