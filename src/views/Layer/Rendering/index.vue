<template>
  <div :class="$style.rendering">3333</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export default class Rendering extends Vue {}
</script>

<style lang="scss" module>
.rendering {
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  min-height: 585px;
  overflow: hidden;
}
</style>