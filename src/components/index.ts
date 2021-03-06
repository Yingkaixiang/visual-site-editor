import RichText from "./RichText/default";
import Picture from "./Picture/default";

import { IComponent } from "@/index.d";

export type IDefaultComponentList = IComponent[];

export const defaultComponentList: IDefaultComponentList = [
  RichText,
  Picture,
];
