<template>
  <div>
    <RadioGroup
      v-model="background"
      size="medium"
      @change="onBackgroundChange"
    >
      <RadioButton label="color">颜色</RadioButton>
      <RadioButton label="picture">图片</RadioButton>
    </RadioGroup>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { RadioGroup, RadioButton } from "element-ui";
import CSS from "csstype";

type Background = "color" | "picture" | "none";

@Component({
  components: {
    RadioGroup,
    RadioButton,
  },
})
export default class Section extends Vue {
  @Prop({ type: Object, default() { return {}; }}) private readonly styles!: CSS.Properties;

  private background: Background = this.checkBackground(this.styles);

  @Watch("styles") private onStylesChange(newVal: CSS.Properties) {
    this.background = this.checkBackground(newVal);
  }

  private onBackgroundChange(label: Background) {
    this.background = label;

    const styles = Object.assign({}, this.styles);
    if (label === "color") {
      styles.backgroundColor = "green";
      this.resetBackgroundImage(styles);
    } else if (label === "picture") {
      styles.backgroundImage = "url(https://cdn.pixabay.com/photo/2019/08/06/08/21/golden-4387704__340.jpg)";
      styles.backgroundSize = "100%";
      styles.backgroundRepeat = "no-repeat";
      this.resetBackgroundColor(styles);
    }

    this.$emit("change", styles);
  }

  private resetBackgroundColor(styles: CSS.Properties) {
    styles.backgroundColor = "";
  }

  private resetBackgroundImage(styles: CSS.Properties) {
    styles.backgroundImage = "";
    styles.backgroundSize = "";
    styles.backgroundRepeat = "";
  }

  private checkBackground(styles: CSS.Properties): Background {
    if (styles.backgroundColor && styles.backgroundColor !== "") {
      return "color";
    } else if (styles.backgroundImage && styles.backgroundImage !== "") {
      return "picture";
    }
    return "none";
  }
}
</script>