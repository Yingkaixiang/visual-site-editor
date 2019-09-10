import CSS from "csstype";

import RichText from "./RichText/default";
import Picture from "./Picture/default";

export type IDefaultComponentList = Array<VSE.IComponent<CSS.Properties>>;

export const defaultComponentList: IDefaultComponentList = [
  RichText,
  Picture,
];
