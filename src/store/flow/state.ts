import { Section } from "@/global";

export interface FlowState {
  dataSource: Section[];
  // 当前激活的区域索引
  index: number;
  // 当前激活的区域
  section: Section | null;
  // 当前背景高亮索引
  backgroundHighlightIndex: number;
}

const state: FlowState = {
  dataSource: [],
  index: -1,
  section: null,
  backgroundHighlightIndex: -1,
};

export default state;
