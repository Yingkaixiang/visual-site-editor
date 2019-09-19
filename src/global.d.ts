declare namespace VSE {
  type IComponentType = "richText" | "picture";
  type IComponentSticks = string[];
  type ISectionPositionType = "static" | "fixed";
  type ISectionPositionLocation = "top" | "bottom" | "anywhere" | "";
  type ISectionType = "flow" | "flow-temp" | "affix" | "suspension" | "global";
  type IVersion = "v1";

  interface ISection<CSS> {
    audit: IAudit;
    components: Array<IComponent<CSS>>;
    id: string;
    positionLocation: ISectionPositionLocation;
    positionType: ISectionPositionType;
    styles: CSS;
    type: ISectionType;
    version: IVersion;
  }

  interface IComponent<CSS> {
    audit: IAudit;
    // 是否可以等比例缩放
    // 如：图片组件
    aspectRatio: boolean;
    id?: string;
    isDraggable: boolean;
    isResizable: boolean;
    item: Array<IComponentItem<CSS>>;
    // 缩放框按钮
    // 如：图片只需要四个角上的按钮
    sticks: IComponentSticks;
    styles: CSS;
    // 组件类型
    type: IComponentType;
    version: IVersion;
  }

  // 触审时用于进行比较的内容
  interface IAudit {
    [propName: string]: string;
  }

  // 复杂组件的子组件
  interface IComponentItem<CSS> {
    id: string;
    styles: CSS;
  }

  interface IRect {
    width: number;
    height: number;
    left: number;
    top: number;
  }
}
