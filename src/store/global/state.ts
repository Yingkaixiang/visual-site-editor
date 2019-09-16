export type IConfigurationType = VSE.IComponentType | "" | "section";

export interface GlobalState {
  // 当前高亮组件的id
  componentHighlightId: string;
  // 编辑器类型
  configurationType: IConfigurationType;
}

const state: GlobalState = {
  componentHighlightId: "",
  configurationType: "",
};

export default state;
