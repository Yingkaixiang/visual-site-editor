<template>
  <img
    :class="$style.img"
    src="https://cdn.pixabay.com/photo/2019/08/03/12/22/hot-air-balloons-4381674__340.jpg"
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