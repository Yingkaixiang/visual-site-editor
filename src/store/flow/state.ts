import { ISection, IComponent } from "@/index.d";

export interface FlowState {
  // 渲染用的数据源
  dataSource: ISection[];
  // 当前激活的区域索引
  index: number;
  // 当前激活的区域
  section: ISection | null;
  // 当前背景高亮索引
  backgroundHighlightIndex: number;
  // 操作层
  operatorStyle: Operator | null;
  // 当前激活的组件
  component: IComponent | null;
  // 组件是否被拖动
  isDragStart: boolean;
  // 组建是否被放入某个区域
  isDragDrop: boolean;
  // 拖入区域高亮索引
  dragHighlightIndex: number;
}

export interface Operator {
  // 操作层高度，会随着区域的增高而变高
  height?: string;
  // 操作层离页面容器的高度
  top: string;
}

const state: FlowState = {
  dataSource: [],
  index: -1,
  section: null,
  backgroundHighlightIndex: -1,
  operatorStyle: null,
  component: null,
  isDragStart: false,
  isDragDrop: false,
  dragHighlightIndex: -1,
};

export default state;
