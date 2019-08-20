<template>
  <div :class="$style.main">
    <div :class="$style['top-blank']"></div>
    <div :class="$style.content">
      <div :class="$style.page">
        <Rendering />
      </div>
    </div>
    <div :class="$style['bottom-blank']"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Rendering from "@/views/Layer/Rendering/index.vue";

@Component({
  components: {
    Rendering,
  },
})
export default class Main extends Vue {}
</script>

<style lang="scss" module>
.main {
  display: flex;
  flex-direction: column;
}

.top-blank {
  height: 32px;
}

.bottom-blank {
  height: 32px;
}

.content {
  position: relative;
}

.page {
  width: 375px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  user-select: none;
}
</style>