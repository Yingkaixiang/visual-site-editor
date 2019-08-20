<template>
  <div>
    <Button @click="doubleClick">文字组件</Button>
  </div>
</template>

<script lang="ts">
import { Button } from "element-ui";
import { Component, Vue } from "vue-property-decorator";

import { doubleClick } from "@/store/flow/dispatches/";

@Component({
  components: {
    Button,
  },
})
export default class Left extends Vue {
  public doubleClick() {
    console.log(123);
    doubleClick({ section: { id: "1" }, component: { id: "2" } });
  }
}
</script>