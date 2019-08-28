import { Component, Vue } from "vue-property-decorator";

let ele: Element | undefined;

@Component
export default class ScrollMixin extends Vue {
  public scrollToBottom() {
    this.$nextTick(() => {
      if (!ele) {
        ele = document.querySelector("#main") as Element;
      }
      if (ele.scrollHeight > ele.clientHeight) {
        ele.scrollTop = ele.scrollHeight - ele.clientHeight;
      }
    });
  }
}
