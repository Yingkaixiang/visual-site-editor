export interface GlobalState {
  // 当前高亮组件的id
  componentHighlightId: string;
  // 编辑器类型
  configurationType: VSE.IComponentType | "";
}

const state: GlobalState = {
  componentHighlightId: "",
  configurationType: "",
};

export default state;
