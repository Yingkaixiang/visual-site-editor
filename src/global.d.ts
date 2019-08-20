export type PositionType = "static" | "relative" | "absolute" | "fixed";
export type PositionLocation = "top" | "bottom" | "anywhere";
export type SectionType = "flow" | "flow-temp" | "affix" | "suspension" | "global";
export type ComponentType = "text";

interface Section {
  audit?: object;
  components: Component[];
  positionType: PositionType;
  positionLocation?: PositionLocation;
  styles: any;
  type: SectionType;
  version: string;
  id: string;
}

interface Component {
  audit?: object;
  item?: object[];
  sticks?: string[];
  aspectRatio?: boolean;
  styles?: any;
  type: ComponentType;
  id: string;
}
