<template>
  <RichText v-if="type" />
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import RichText from "@/components/RichText/RichText.vue";

@Component({
  components: {
    RichText,
  },
})
export default class ComponentX extends Vue {
  @Prop({ type: String }) private readonly type!: string;
}
</script>