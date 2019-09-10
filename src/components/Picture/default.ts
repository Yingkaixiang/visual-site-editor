import shortid from "shortid";

import { IComponent } from "@/index.d";

const Picture: IComponent = {
  id: shortid.generate(),
  audit: {},
  item: [],
  sticks: ["tl", "tr", "bl", "br"],
  aspectRatio: false,
  styles: {
    width: "375px",
    height: "190px",
    top: "0px",
    left: "0px",
  },
  type: "picture",
  isResizable: true,
  isDraggable: true,
  version: "v1",
};

export default Picture;
