<template>
  <div :class="$style.interaction">
    <Flow />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Flow from "./Flow.vue";

@Component({
  components: {
    Flow,
  },
})
export default class Interaction extends Vue {}
</script>

<style lang="scss" module>
.interaction {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
}
</style>