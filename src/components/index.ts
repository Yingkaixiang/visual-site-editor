import RichText from "./RichText/default";
import Picture from "./Picture/default";

import { IComponentDefault } from "@/index.d";

export type IDefaultComponentList = IComponentDefault[];

export const defaultComponentList: IDefaultComponentList = [
  RichText,
  Picture,
];
