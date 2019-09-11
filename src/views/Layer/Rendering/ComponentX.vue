<template>
  <div>
    <RichText v-if="type === 'text'" />
    <Picture v-if="type === 'picture'" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import RichText from "@/components/RichText/RichText.vue";
import Picture from "@/components/Picture/Picture.vue";

@Component({
  components: {
    RichText,
    Picture,
  },
})
export default class ComponentX extends Vue {
  @Prop({ type: String }) private readonly type!: string;
}
</script>