import CSS from "csstype";

export type PositionType = "static" | "relative" | "absolute" | "fixed";
export type PositionLocation = "top" | "bottom" | "anywhere";
export type SectionType = "flow" | "flow-temp" | "affix" | "suspension" | "global";
export type ComponentType = "text" | "picture";

interface Section {
  audit?: object;
  components: IComponent[];
  positionType: PositionType;
  positionLocation?: PositionLocation;
  styles: any;
  type: SectionType;
  version: string;
  id: string;
}

interface IComponent {
  audit: object;
  item: object[];
  sticks: string[];
  aspectRatio: boolean;
  styles: CSS.Properties;
  type: ComponentType;
  id: string;
  isResizable: boolean;
  isDraggable: boolean;
}
