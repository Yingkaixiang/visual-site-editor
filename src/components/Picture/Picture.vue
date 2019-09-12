<template>
  <img
    :class="$style.img"
    src="https://cdn.pixabay.com/photo/2019/07/29/16/13/bald-eagle-4370916__340.jpg"
    alt="图片"
  />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Picture extends Vue {}
</script>

<style lang="scss" module>
.img {
  width: 100%;
  height: 100%;
}
</style>