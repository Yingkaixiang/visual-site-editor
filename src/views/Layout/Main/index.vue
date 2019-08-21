<template>
  <div :class="$style.main">
    <div :class="$style['top-blank']"></div>
    <div :class="$style.content">
      <Background />
      <div :class="$style.page">
        <Rendering />
        <Interaction />
      </div>
    </div>
    <div :class="$style['bottom-blank']"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Background from "./Background.vue";
import Rendering from "@/views/Layer/Rendering/index.vue";
import Interaction from "@/views/Layer/Interaction/index.vue";

@Component({
  components: {
    Background,
    Rendering,
    Interaction,
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