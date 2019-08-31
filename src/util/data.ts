import shortid from "shortid";

import { Section, PositionType, SectionType, ComponentType } from "@/global.d";

export function createSection(
  positionType: PositionType,
  type: SectionType,
  height: number,
): Section {
  return {
    id: shortid.generate(),
    components: [],
    positionType,
    type,
    version: "v1",
    styles: {
      height,
    },
  };
}

export function createComponent(type: ComponentType, sticks?: string[]) {
  return {
    sticks: sticks || ["tl", "tm", "tr", "mr", "br", "bm", "bl", "ml"],
    type,
    id: shortid.generate(),
  };
}
