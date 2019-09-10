import shortid from "shortid";

import { ISection } from "@/index.d";

export function createSection(
  positionType: VSE.ISectionPositionType,
  type: VSE.ISectionType,
  height: string,
): ISection {
  return {
    audit: {},
    components: [],
    id: shortid.generate(),
    positionLocation: "",
    positionType,
    type,
    version: "v1",
    styles: {
      height,
    },
  };
}
