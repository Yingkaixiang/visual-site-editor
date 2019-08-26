import { Section } from "@/global";

export interface FlowState {
  // 渲染用的数据源
  dataSource: Section[];
  // 当前激活的区域索引
  index: number;
  // 当前激活的区域
  section: Section | null;
  // 当前背景高亮索引
  backgroundHighlightIndex: number;
  // 操作层
  operatorStyle: Operator | null;
}

export interface Operator {
  // 操作层高度，会随着区域的增高而变高
  height?: number;
  // 操作层离页面容器的高度
  top: number;
}

const state: FlowState = {
  dataSource: [],
  index: -1,
  section: null,
  backgroundHighlightIndex: -1,
  operatorStyle: null,
};

export default state;
